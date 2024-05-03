import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import OtpPage from "../pages/otpPage/OtpPage";
import ResetPassword from "../pages/resetPassword/ResetPassword";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
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
            }
        ]
    }
])

export default router;