import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useToken from '../../hooks/useToken';
import { addUserToDb } from '../../Utils/Utils';

const Login = () => {
    const { loginUserWithEmailAndPassword, signInUserWithGoogle } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [loginUserEmail, setloginUserEmail] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/dashboard';
    const [token] = useToken(loginUserEmail);

    //token verification
    if (token) {
        navigate(from, { replace: true });
    }

    //Login user with Google
    const loginWithGoogle = () => {
        signInUserWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user.email, user.displayName);
                addUserToDb(user.displayName, user.email);
                setloginUserEmail(user.email);
            })
            .then(error => {
                console.log(error.message)
                setErrorMessage(error)
            });
    }


    //Login user with email address and password
    const handleLogin = (data) => {
        console.log(data.email);

        loginUserWithEmailAndPassword(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user.displayName, user.email);
                addUserToDb(user.displayName, user.email);
                setloginUserEmail(user.email);

            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            });

    }




    return (
        <div className='flex justify-center items-center my-5'>
            <form onSubmit={handleSubmit(handleLogin)}>

                <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className='card-title'>Login</h3>
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
                                <p className='text-red-600'>{errorMessage}</p>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <p className='text-sm font-bold text-center mb-5'>New to Toothsome? <Link className='text-primary' to={'/signup'}>Create an account.</Link></p>
                            <button type='submit' className="btn">Login</button>
                            <p className='divider'>OR</p>
                            <button onClick={loginWithGoogle} className='btn'><FaGoogle className='text-3xl'></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;