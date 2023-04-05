import React, { useContext } from 'react';
import { FaUser, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const logOut = () => {
        signOutUser()
            .then(result => { })
            .then(error => { console.error(error) });
    }

    const navLinks =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/reviews'}>Reviews</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/appointment'}>Appointment</Link></li>

        </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">ToothSome</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user?.uid ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                                    <li><Link onClick={logOut}>Logout</Link></li>
                                </ul>
                            </div>
                            : null
                    }
                    <input type="checkbox" className="toggle" checked />
                    {
                        !user?.email ? <Link to={'/login'} className="btn btn-outline">Login</Link> : null

                    }
                    {/* <Link to={'/appointment'} className="btn btn-primary mx-2 ">Appointment</Link> */}
                </div>
                <label htmlFor='dashboard' tabIndex={0} className="btn btn-ghost btn-circle  lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>

            </div>
        </div >
    );
};

export default Header;