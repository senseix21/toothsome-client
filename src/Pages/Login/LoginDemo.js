// import React, { useContext } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { FaGoogle } from 'react-icons/fa';
// import { AuthContext } from '../../Context/UserContext';

// const Login = () => {
//     const { signInUserWithGoogle, loginUserWithEmailAndPassword } = useContext(AuthContext);
//     const location = useLocation();
//     const navigate = useNavigate();
//     const from = location.state?.from?.pathname || '/';


//     //login with Google PopUp//
//     const signInwithGoogle = () => {
//         signInUserWithGoogle()
//             .then(result => {
//                 navigate(from, { replace: true });
//                 const user = result.user;
//                 console.log(user);
//             })
//             .catch(err => {
//                 console.error(err);
//             })
//     }

//     //Login with email and password//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);

//         loginUserWithEmailAndPassword(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 navigate(from, { replace: true });
//             })
//             .catch(error => console.log(error));
//     }
//     return (
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10">
//             <div className="card-body">
//                 <div className="card-title justify-center">
//                     <h1>Login</h1>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="email" name='email' placeholder="email" className="input input-bordered" />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input type="password" name='password' placeholder="************" className="input input-bordered" />
//                         <label className="label">
//                             <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
//                         </label>
//                     </div>
//                     <div className="form-control mt-6">
//                         <p className='text-sm font-bold text-center mb-5'>New to Toothsome? <Link className='text-primary' to={'/signup'}>Create an account.</Link></p>
//                         <button type='submit' className="btn">Login</button>
//                         <p className='text-sm font-bold text-center'>OR</p>
//                         <button onClick={signInwithGoogle} className='btn'><FaGoogle className='text-3xl'></FaGoogle></button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;