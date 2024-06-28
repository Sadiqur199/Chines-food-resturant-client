import {
  createBrowserRouter,
  Link,
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
import Payment from "../pages/Dasboard/Payment/Payment";
import img1 from '../assets/icon/404.gif'
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import UserHome from "../pages/Dasboard/UserHome/UserHome";
import AdminHome from "../pages/Dasboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path:'*',
    element:<div className="w-full">
       <img className="mx-auto w-full"  src={img1} alt="" />
       <Link to='/'><button className='absolute  ml-0 mt-[-62%] px-4 py-5 rounded bg-slate-500 text-white'>Back To Home </button></Link>
    </div>
   },
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
      },
      {
        path:'menu/:id',
        element:<FoodDetails></FoodDetails>,
      }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
         path:'userhome',
         element:<UserHome></UserHome>
      },
      {
        path:'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      //admin routes
      {
        path:'adminhome',
        element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>

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