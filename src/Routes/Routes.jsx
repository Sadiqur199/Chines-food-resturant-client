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
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dasboard/MyCart/MyCart";
import AllUsers from "../pages/Dasboard/AllUsers/AllUsers";
import AddItem from "../pages/Dasboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../pages/Dasboard/ManageItem/ManageItem";

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
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'allusers',
        element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path:'addItem',
        element:<AdminRoutes><AddItem></AddItem></AdminRoutes>
      },
      {
       path:'manageItem',
       element:<AdminRoutes><ManageItem></ManageItem></AdminRoutes>
      },
    ]
  }
]);