import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imgHostKey = process.env.REACT_APP_imgbb;

    const { data: specialities = [], isLoading, } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch(`https://toothsome-server.vercel.app/appointmentSpeciality`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formdata = new FormData();
        formdata.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formdata,
        })
            .then(response => response.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        photo: imgData.data.url
                    }
                    console.log(doctor);
                    fetch(`https://toothsome-server.vercel.app/dashboard/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.acknowledged) {
                                alert('Doctor added successfully')
                                console.log(data)
                            }
                            else {
                                alert('Doctor already added');
                                console.log(data.message);
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>Add a Doctor</h1>
            <div>
                <form onSubmit={handleSubmit(handleAddDoctor)}>

                    <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type='text' {...register("name",
                                    { required: 'Name Address is required' })} placeholder="name" className="input input-bordered" />
                                {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type='email' {...register("email",
                                    { required: 'Email Address is required' })} placeholder="Email" className="input input-bordered" />
                                {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Speciality</span>
                                </label>
                                <select {...register('speciality', { required: true })} className="select select-accent w-full max-w-xs">
                                    {
                                        specialities.map(speciality =>
                                            <option
                                                key={speciality._id}
                                                value={speciality.name}
                                            >{speciality.name}</option>
                                        )
                                    }

                                </select>
                                {errors.speciality && <p className='text-red-500' role="alert">{errors.speciality?.message}</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type='file' {...register("image",
                                    { required: 'Name Address is required' })} placeholder="name" className="input input-bordered" />
                                {errors.image && <p className='text-red-500' role="alert">{errors.image?.message}</p>}
                            </div>
                            <div className="form-control mt-3">
                                <button type='submit' className="btn">Add Doctor</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;