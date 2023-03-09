import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AllCategories from "../Pages/AllPets/AllCategories/AllCategories";
import Blog from "../Pages/Blogs/Blog";
import AddProduct from "../Pages/Dashboard/AddProducts/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyers/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllSellers/AllSeller";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../Pages/Dashboard/MyProducts/MyProduct";
import Payment from "../Pages/Dashboard/Payments/Payment";
import Home from "../Pages/Home/Home";
import Login from "../Registers/Login/Login";
import SignUp from "../Registers/SignUP/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import ErrorPage from "./ErrorRoute/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

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
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:id',
                loader: async ({ params }) => {
                    return fetch(`https://artificial-pets-server.vercel.app/allPets/${params.id}`)
                },
                element: <PrivateRoute><AllCategories></AllCategories></PrivateRoute>
            },
            {
                path: '/*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://artificial-pets-server.vercel.app/booking/${params.id}`)
            // },
            {
                path: '/dashboard/add',
                // element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/product',
                // element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            }
        ]
    }
]);
export default router;