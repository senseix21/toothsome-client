import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useAdmin from '../../hooks/useAdmin';
import Header from '../../Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard'} className='font-bold'>Appointments</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to={'/dashboard/allusers'} className='font-bold'>All Users</Link></li>
                                <li><Link to={'/dashboard/adddoctor'} className='font-bold'>Add Doctor</Link></li>
                                <li><Link to={'/dashboard/managedoctors'} className='font-bold'>Manage Doctors</Link></li>
                            </>

                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;