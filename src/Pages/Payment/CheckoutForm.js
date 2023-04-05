import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ appointment }) => {
    const { price, email, name, _id } = appointment;
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`https://toothsome-server.vercel.app/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
                console.log(data.clientSecret);
            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
            return;
        };

        // setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        };

        if (paymentIntent.status === 'succeeded') {
            setSuccess('Congrats! Payment was successful!');
            setTransactionId(paymentIntent.id);
            toast.success(success);
            console.log(paymentIntent);

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
            }

            fetch(`https://toothsome-server.vercel.app/payments`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Added payment to the database.');
                    }
                    console.log(data);
                })

        }
        setProcessing(false);


    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className='text-red-600 my-2'>{cardError}</p>
            <button className='btn btn-accent btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            {
                success &&
                <div>
                    <p className='text-xl font-bold text-green-600'>{success}</p>
                    <p>{transactionId}</p>
                </div>
            }
        </form>

    );
};

export default CheckoutForm;