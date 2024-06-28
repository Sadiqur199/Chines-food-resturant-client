import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import UseCart from '../../../Hooks/UseCart';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import UseMenu from '../../../Hooks/UseMenu';
import UseAdmin from '../../../Hooks/UseAdmin';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [cart] = UseCart()
  const [isDarkMode, setIsDarkMode] = useState('light');
  const [show , setShow] = useState(false)
  const [isAdmin] = UseAdmin()

  // const [menu , setMenu] = useState([])
  // useEffect(()=>{
  //   fetch('https://food-resturant-server.vercel.app/menu')

  // },[])

  const [menu] = UseMenu()

  //search button handel
  const [filteredItems, setFilteredItems] = useState(menu);

  const handleSearch = (searchTerm) => {
    const filteredItems = menuItems.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    setFilteredItems(filteredItems);
  };
 
 

  const handelLogOut = () => {
    logOut()
      .then()
      .then(error => console.log(error.message))
  }

  useEffect(() => {
    if (isDarkMode == 'dark') {
      document.body.classList.add('dark')
    }
    else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  const handelDark = () => {
    setIsDarkMode(isDarkMode == 'dark' ? 'light' : 'dark')
    // console.log('dark')
  }

  const navOption = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order">Order Food</Link></li>
    <li><Link to="">Contact</Link></li>
    <li><Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome' }>Dashboard</Link></li>
    <li>
      <Link to="/dashboard/mycart">
        <button className="btn gap-2">
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </button>
      </Link>
    </li>
    {
      user ? <>
        <button onClick={handelLogOut} className="btn  btn-ghost md:mt-3">LogOut</button>
      </>
        :
        <>
          <li><Link to="/login">Login</Link></li>
        </>
    }
  </>
  return (
    <>
      <div className="navbar fixed z-10 md:bg-opacity-30 md:bg-black md:text-white ">
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

           <form onSubmit={()=>handleSearch(filteredItems)}>
           <div className="form-control ml-2 mr-2">
            <input type="text" placeholder="Search" className="text-black input input-bordered w-20 md:w-auto" />
          </div>
           </form>

          <img className='mt-2 me-2 rounded' style={{ height: "35px", width: '35px' }} title={user?.displayName} src={user?.photoURL ? user.photoURL
            :
            <Link href="" className='mt-1'>
              <FaUserCircle style={{ fontSize: '2rem' }} />
            </Link>} alt="" />

          <div onClick={handelDark}>
            <button className=' text-white' onClick={()=>setShow(!show)}>
            <small>
              {
                show ? <span className='px-2' style={{fontSize:'20px'}}><BsToggleOn></BsToggleOn></span> : <span className='px-2' style={{fontSize:'20px'}}> <BsToggleOff></BsToggleOff></span>
              }
            </small>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;