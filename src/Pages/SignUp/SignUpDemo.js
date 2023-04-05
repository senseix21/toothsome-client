// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../Context/UserContext';

// const SignUp = () => {
//     const { signUpUserWithEmailandPassword } = useContext(AuthContext);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const form = event.target;

//         const name = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(name, email, password);

//         signUpUserWithEmailandPassword(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//             })
//             .catch(err => console.error(err));


//     }
//     return (
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10">
//             <div className="card-body">
//                 <div className="card-title justify-center">
//                     <h1>Sign Up </h1>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Username</span>
//                         </label>
//                         <input type="text" name='name' placeholder="Username" className="input input-bordered" />
//                     </div>
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
//                         <p className='text-sm font-bold text-center mb-5'>Already have an account? <Link className='text-primary' to={'/login'}>Login.</Link></p>
//                         <button type='submit' className="btn">Register</button>
//                         {/* <p className='text-sm font-bold text-center'>OR</p>
//                         <button className='btn'><FaGoogle className='text-3xl'></FaGoogle></button> */}
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignUp;