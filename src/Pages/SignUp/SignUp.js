import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signUpUserWithEmailandPassword, updateUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const navigate = useNavigate();
    const [token] = useToken(createdUserEmail);
    console.log(token)

    if (token) {
        navigate('/');
    }



    const handleCreateUser = (data) => {
        signUpUserWithEmailandPassword(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                //Updating User
                const userInfo = {
                    displayName: data.name,
                    photoURL: 'https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg',
                }
                updateUser(userInfo)
                    .then(() => {
                        addUserToDb(user.displayName, user.email);

                    })
                    .catch(error => console.error(error)); //


            })


            .then(error => {
                console.log(error);
                setErrorMessage(error)
            });
    }


    const addUserToDb = (name, email) => {
        const user = { name, email };
        fetch(`https://toothsome-server.vercel.app/users`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                setCreatedUserEmail(email);
                if (data.acknowledged) {
                    alert('User added successfully')
                }

            })
            .catch(err => console.error(err))
    }//



    return (
        <div>
            <div className='flex justify-center items-center my-5'>
                <form onSubmit={handleSubmit(handleCreateUser)}>

                    <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h3 className='card-title flex justify-center'>Sign Up</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type='text' {...register("name",
                                    { required: 'Username Address is required' })} placeholder="Username" className="input input-bordered" />
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
                                    <span className="label-text">Password</span>
                                </label>
                                <input type='password' {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Password must be atleast 6 charracter.' } })} placeholder="***********" className="input input-bordered" />
                                {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}

                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <p>{errorMessage}</p>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <p className='text-sm font-bold text-center mb-5'>Already have an account? <Link className='text-primary' to={'/login'}>login.</Link></p>
                                <button type='submit' className="btn">SIGN UP</button>
                                {/* <p className='divider'>OR</p>
                                <button className='btn'><FaGoogle className='text-3xl'></FaGoogle></button> */}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;