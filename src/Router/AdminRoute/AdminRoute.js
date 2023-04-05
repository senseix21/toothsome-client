import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (loading || isAdminLoading) {
        return <span className='flex justify-center mt-10'><progress className="progress w-56"></progress></span>
    }

    if (user && isAdmin) {
        return children;

    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;