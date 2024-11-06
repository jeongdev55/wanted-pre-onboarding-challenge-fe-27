import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Home from "./pages/Home.tsx";
import { ROUTES } from "./constants/routes.ts";

export const router = createBrowserRouter([
  {
    path: ROUTES.AUTH.LOGIN,
    element: <Login />,
    /*errorElement: <ErrorPage />,*/
  },
  {
    path: ROUTES.AUTH.SIGNUP,
    element: <Signup />,
    /*errorElement: <ErrorPage />,*/
  },
  {
    path: ROUTES.HOME,
    element: <Home />,
    /*errorElement: <ErrorPage />,*/
  },
]);
