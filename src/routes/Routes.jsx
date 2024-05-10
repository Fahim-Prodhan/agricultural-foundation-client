import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import OtpPage from "../pages/otpPage/OtpPage";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import Home from "../pages/HomoComponents/home/Home";
import AdminDashboard from "../admin/dashboard/adminDashboard/AdminDashboard";
import DashboardContent from "../admin/dashboard/dashboardContent/DashboardContent";
import AddAdmin from "../admin/dashboard/addAdmin/AddAdmin";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
            ,
            {
                path:'/forgot-password',
                element:<ForgotPassword></ForgotPassword>
            },
            {
                path:'/otp',
                element:<OtpPage></OtpPage>
            },
            {
                path:'/reset-password',
                element:<ResetPassword></ResetPassword>
            },
        ]
    },
    {
        path:'/admin',
        element:<AdminDashboard></AdminDashboard>,
        children:[
            {
                path:'dashboard',
                element:<DashboardContent></DashboardContent>
            },
            {
                path:'add-admin',
                element:<AddAdmin></AddAdmin>
            }
        ]
    }
])

export default router;