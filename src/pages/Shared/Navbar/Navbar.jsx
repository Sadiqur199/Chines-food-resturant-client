import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import UseCart from '../../../Hooks/UseCart';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const[cart] = UseCart()

  const handelLogOut = () => {
    logOut()
      .then()
      .then(error => console.log(error.message))
  }

  const navOption = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order">Order Food</Link></li>
    <li><Link to="">Contact</Link></li>
    <li>
      <Link to="/">
        <button className="btn gap-2">
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </button>
      </Link>
    </li>
    {
      user ? <>
        <button onClick={handelLogOut} className="btn  btn-ghost">LogOut</button>
      </>
        :
        <>
          <li><Link to="/login">Login</Link></li>
        </>
    }
  </>
  return (
    <>
      <div className="navbar fixed z-10 md:bg-opacity-30 md:bg-black md:text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Chines Food Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;