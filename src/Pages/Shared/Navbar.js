import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItem = (
    <>
      <li className="mx-2">
        <Link to={'/'} className='hover:bg-[#3A4256] hover:text-white rounded-lg'>HOME</Link>
      </li>
      
      <li className="mx-2">
        <Link to={'/apoinment'} className='hover:bg-[#3A4256] hover:text-white rounded-lg'>APOINMENT</Link>
      </li>
      <li className="mx-2">
        <Link to={'/review'} className='hover:bg-[#3A4256] hover:text-white rounded-lg'>REVIEW</Link>
      </li>
      <li className="mx-2">
        <Link to={'/contact'} className='hover:bg-[#3A4256] hover:text-white rounded-lg'>CONTACT US</Link>
      </li>
      <li className="mx-2">
        <Link to={'/about'} className='hover:bg-[#3A4256] hover:text-white rounded-lg'>ABOUT</Link>
      </li>
      <li className="mx-2">
        <Link to={'/login'} className='hover:bg-[#3A4256] hover:text-white rounded-lg'>LOGIN</Link>
      </li>
    </>
  );

  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case ml-1 lg:ml-16 text-2xl font-semibold">Doctors Portal</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal mr-8">
          {menuItem}
        </ul>
      </div>
      {/* <div class="navbar-end">
        <a class="btn">Get started</a>
      </div> */}
      
    </div>
  );
};

export default Navbar;
