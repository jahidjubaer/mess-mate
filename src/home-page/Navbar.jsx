import React from "react";
import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <div className="shadow-sm bg-[#2D2D2D]">
      <div className="navbar w-11/12  lg:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-black lg:hidden "
            >
              <i className="fa-solid fa-bars text-white fa-xl "></i>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-white bg-black dropdown-content font-medium rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Dashboard </a>
              </li>
              <li>
                <a>Meals </a>
              </li>
              <li>
                <a>Bazar </a>
              </li>
              <li>
                <a>Fund & Costing</a>
              </li>
              <li>
                <a>Monthly Bills Update </a>
              </li>

              <li>
                <a>Due Collection</a>
              </li>
              <li>
                <a>Members</a>
              </li>
            </ul>
          </div>
          <a className="btn bg-[#2D2D2D] border-none shadow-none text-xl">
           <i className="fa-solid fa-2xl text-[#4CAF50] fa-utensils"></i>                             
            <span className="text-2xl text-white  ">Mass Mate</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu   font-normal text-gray-300 menu-horizontal px-1">
            <li className="hover:bg-[#4CAF50] hover:rounded-4xl hover:text-white hover:font-bold transition-all duration-300 ease-in-out cursor-pointer">
              <a>Dashboard </a>
            </li>
            <li className="hover:bg-[#4CAF50] hover:rounded-4xl hover:text-white hover:font-bold transition-all duration-300 ease-in-out cursor-pointer">
              <a>Meals </a>
            </li>
            <li className="hover:bg-[#4CAF50] hover:rounded-4xl hover:text-white hover:font-bold transition-all duration-300 ease-in-out cursor-pointer">
              <a>Bazar </a>
            </li>
            <li className="hover:bg-[#4CAF50] hover:rounded-4xl hover:text-white hover:font-bold transition-all duration-300 ease-in-out cursor-pointer">
              <a>Fund & Costing</a>
            </li>
            <li className="hover:bg-[#4CAF50] hover:rounded-4xl hover:text-white hover:font-bold transition-all duration-300 ease-in-out cursor-pointer">
              <a>Monthly Bills Update </a>
            </li>

            <li className="hover:bg-[#4CAF50] hover:rounded-4xl hover:text-white hover:font-bold transition-all duration-300 ease-in-out cursor-pointer">
              <a>Due Collection</a>
            </li>
            <li className="hover:bg-[#4CAF50] hover:rounded-4xl hover:text-white hover:font-bold transition-all duration-300 ease-in-out cursor-pointer">
              <a>Members</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu font-medium menu-sm dropdown-content bg-[#2D2D2D] text-white  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <h3 className="text-white ml-4 mr-6 hidden lg:block font-medium">Jahid Hasan</h3>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
