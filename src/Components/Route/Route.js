import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllCategories from "../Pages/AllPets/AllCategories/AllCategories";
import Blog from "../Pages/Blogs/Blog";
import AddProduct from "../Pages/Dashboard/AddProducts/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyers/AllBuyer";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../Pages/Dashboard/MyProducts/MyProduct";
import Payment from "../Pages/Dashboard/Payments/Payment";
import Home from "../Pages/Home/Home";
import LoginProcess from "../Registers/Login/LoginProcess";
import SignUp from "../Registers/SignUP/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
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
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            },
            {
                path: '/dashboard/add',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/product',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            }
        ]
    }
]);
export default router;