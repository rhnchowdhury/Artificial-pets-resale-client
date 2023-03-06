import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllCategories from "../Pages/AllPets/AllCategories/AllCategories";
import Blog from "../Pages/Blogs/Blog";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../Pages/Dashboard/Payments/Payment";
import Home from "../Pages/Home/Home";
import LoginProcess from "../Registers/Login/LoginProcess";
import SignUp from "../Registers/SignUP/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <LoginProcess></LoginProcess>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/allPets/${params.id}`)
                },
                element: <PrivateRoute><AllCategories></AllCategories></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            }
        ]
    }
]);
export default router;