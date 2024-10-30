import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.tsx'

export const router =  createBrowserRouter([
    {
        path: "/auth",
        element: <Login />,
        /*errorElement: <ErrorPage />,*/
    },
]);
