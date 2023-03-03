import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blogs/Blog";
import Home from "../Pages/Home/Home";
import LoginProcess from "../Registers/Login/LoginProcess";
import SignUp from "../Registers/SignUP/SignUp";

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
            }
        ]
    }
]);
export default router;