import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/OrderFood/Order/Order";
import Login from "../pages/Login/Login";
import Registation from "../pages/Registation/Registation";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'menu',
        element:<Menu></Menu>
      },
      {
        path:'order',
        element:<Order></Order>

      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'registration',
        element:<Registation></Registation>
      }
    ]
  },
]);