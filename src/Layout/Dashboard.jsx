import React from 'react';
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUser, FaUsers, FaWallet } from 'react-icons/fa';
import { BsFillCartCheckFill, BsListTask } from "react-icons/bs";
import {  ImSpoonKnife } from "react-icons/im";
import { NavLink, Outlet } from 'react-router-dom';
import UseCart from '../Hooks/UseCart';
import UseAdmin from '../Hooks/UseAdmin';

const Dashboard = () => {

  const [cart] = UseCart()

  //TODO : load  data from the server dynamically admin based in data
  // const isAdmin = true;
  const [isAdmin] = UseAdmin()

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
      <label htmlFor="my-drawer-2" className="btn  border-none my-5 drawer-button lg:hidden">Show Dashboard</label>
        <Outlet></Outlet>

      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  text-base-content">
          <h1 className='font-bold text-2xl text-center'>Chinese Food Restaurant</h1>

          {
            isAdmin ?
              <>
                <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome>Admin Home</NavLink></li>
                <li><NavLink to='/dashboard/addItem'> <ImSpoonKnife></ImSpoonKnife>Add An Item</NavLink></li>
                <li><NavLink to='/dashboard/manageItem'><BsListTask></BsListTask>Manage Items</NavLink></li>
                <li><NavLink to='/dashboard/history'><FaBook></FaBook> Manage Bookings</NavLink></li>
                <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>

              </>

              :
              <>
                <li><NavLink to='/dashboard/userhome'><FaHome></FaHome>User Home</NavLink></li>
                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                  <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </NavLink></li>
              </>
          }



          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
          <li><NavLink to="/menu"><BsListTask></BsListTask> Menu</NavLink></li>
          <li><NavLink to="/order"><BsFillCartCheckFill></BsFillCartCheckFill> Order Food</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;