import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AvailableOptions from './AvailableOptions';

const AvailableAppointment = ({ selected }) => {
    const [treatments, setTreatments] = useState(null);
    const date = format(selected, 'PP')
    console.log(date)

    const { data: appointmentOptioins = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptioins', date],
        queryFn: async () => {
            const res = await fetch(`https://toothsome-server.vercel.app/appointmentOptions?date=${date}`)
            // const res = await fetch(`https://toothsome-server.vercel.app/v2/appointmentOptions?date=${date}`)
            const data = res.json()
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section className='mt-16'>
            <h4 className='font-bold text-lg text-center mb-6'> Appointment available on <span className='text-primary'>{format(selected, 'PP')} </span></h4>
            <div className='grid lg:grid-cols-3 gap-5 mx-14'>
                {
                    appointmentOptioins.map(option =>
                        <AvailableOptions
                            key={option._id}
                            option={option}
                            setTreatments={setTreatments}
                        ></AvailableOptions>)
                }
            </div>

            {
                treatments &&
                <BookingModal
                    treatments={treatments}
                    setTreatments={setTreatments}
                    selected={selected}
                    refetch={refetch}
                ></BookingModal>
            }


        </section>
    );
};

export default AvailableAppointment;