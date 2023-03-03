import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blogs/Blog";
import Home from "../Pages/Home/Home";
import LoginProcess from "../Registers/Login/LoginProcess";

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
            }
        ]
    }
]);
export default router;