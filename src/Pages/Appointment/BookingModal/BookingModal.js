import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const BookingModal = ({ treatments, selected, setTreatments, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots, price } = treatments;
    const date = format(selected, 'PP')

    const handleModalSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const slot = form.slot.value;

        // console.log(name, phone, email);

        const patient = {
            treatment: name,
            patient: patientName,
            date,
            slot,
            phone,
            email,
            price
        }
        console.log(patient);
        setTreatments(null);


        fetch(`https://toothsome-server.vercel.app/appointment`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(patient),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Appointment created successfully!')
                    form.reset();
                    refetch();
                }
                else {
                    alert(data.message);
                }
            })
            .catch(err => {
                console.error(err);
            })


    }
    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='flex justify-between items-center'>
                        <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h4 className='font-bold'>{name}</h4>
                    </div>
                    <form onSubmit={handleModalSubmit} className='mx-auto mt-10 text-center'>
                        <input type="text" value={date} placeholder="Type here" className="input input-bordered w-full  mb-3" readOnly />
                        <select name='slot' className="select select-bordered w-full mb-3">
                            {/* <option disabled selected>Appointment time</option> */}
                            {
                                slots.map(slot =>
                                    <option key={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' defaultValue={user.displayName} placeholder="Fullname" className="input input-bordered w-full  mb-3" required readOnly />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full  mb-3" required />
                        <input type="email" name='email' defaultValue={user.email} placeholder="Email" className="input input-bordered w-full  mb-3" required readOnly />
                        <button className='btn btn-outline btn-primary w-full'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;