import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';
import DoctorsList from './DoctorsList/DoctorsList';
import { toast } from 'react-hot-toast';

const ManageDoctors = () => {
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://toothsome-server.vercel.app/dashboard/doctors`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }

            catch (err) {

            }
        }
    });

    console.log(doctors);

    const handleDeleteDoctor = id => {
        fetch(`https://toothsome-server.vercel.app/dashboard/doctors/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Doctor Deletred successfully')
                }
            })
        refetch();
    }


    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h1>Total Doctors: {doctors.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        doctors.map((doctor, i) =>
                            <DoctorsList
                                key={doctor._id}
                                doctor={doctor}
                                i={i}
                                refetch={refetch}
                                handleDeleteDoctor={handleDeleteDoctor}
                            >

                            </DoctorsList>)
                    }


                </table>
            </div>

        </div>
    );
};

export default ManageDoctors;