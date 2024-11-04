import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Signup from "./pages/Signup.tsx";
import Home from "./pages/Home.tsx";

export const router =  createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
        /*errorElement: <ErrorPage />,*/
    },
    {
        path: "/signup",
        element: <Signup />,
        /*errorElement: <ErrorPage />,*/
    },
    {
        path: "/home",
        element: <Home />,
        /*errorElement: <ErrorPage />,*/
    },
]);
