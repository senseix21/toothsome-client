import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const appointment = useLoaderData()
    const navigation = useNavigation();
    console.log(appointment);

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-3xl font-bold'>Payment for {appointment.treatment}</h1>
            <p className='text-xl'>Please, pay ${appointment.price} for your appointment on {appointment.date} at {appointment.slot}.</p>
            <div className='w-96 my-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;