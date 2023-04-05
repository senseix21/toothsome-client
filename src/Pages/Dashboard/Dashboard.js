import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    console.log(email);

    const date = format(new Date(), 'PP')
    console.log(date)

    const { data: appointments = [], refetch } = useQuery({
        queryKey: ['appointments', email],
        queryFn: async () => {
            const res = await fetch(`https://toothsome-server.vercel.app/appointment?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json();
            return data;
        }
    });

    const handlePaymentRequest = (id) => {
        console.log('Payment request is clicked', id);
    };


    return (
        <div className=''>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold'>Today's Schedule</h2>
                <button className='btn'>{date}</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Appointment time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointments.map((appointment, i) =>
                                <AvailableAppointments
                                    key={appointment._id}
                                    appointment={appointment}
                                    refetch={refetch}
                                    i={i}
                                    handlePaymentRequest={() => handlePaymentRequest(appointment._id)}
                                ></AvailableAppointments>)
                        }
                    </tbody>
                </table>

            </div>
        </div>

    );
};

export default Dashboard;