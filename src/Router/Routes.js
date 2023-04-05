import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Contact from "../Pages/Contact/Contact";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Payment/Payment";
import Reviews from "../Pages/Reviews/Reviews";
import SignUp from "../Pages/SignUp/SignUp";
import DisplayError from "../Shared/DisplayError/DisplayError";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/about', element: <About></About> },
            { path: '/appointment', element: <Appointment></Appointment> },
            { path: 'reviews', element: <Reviews></Reviews> },
            { path: '/contact', element: <Contact></Contact> },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <SignUp></SignUp> },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            { path: '/dashboard', element: <Dashboard></Dashboard> },
            { path: '/dashboard/allusers', element: <AdminRoute><AllUsers></AllUsers></AdminRoute> },
            { path: '/dashboard/adddoctor', element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute> },
            { path: '/dashboard/managedoctors', element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute> },
            {
                path: '/dashboard/payment/:id', element: <Payment></Payment>, loader: async ({ params }) => {
                    return await fetch(`https://toothsome-server.vercel.app/appointment/${params.id}`)
                }
            },
        ]

    }
]);