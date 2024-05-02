import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/Logo-FUNDAPROTAN-white.png'

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  const links = (
    <>
      <li><NavLink 
        onClick={hamburger}
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#fff",
          background: isActive ? "transparent" : "transparent",
        })}>Home</NavLink>
      </li>
      <li><NavLink 
        onClick={hamburger}
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#fff",
          background: isActive ? "transparent" : "transparent",
        })}>About</NavLink>
      </li>

    </>
  );

  return (
    <div>
      <nav className=" bg-[#5BBCFF] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Left side website name and logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="w-16" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Donate
            </span>
          </Link>

          {/* Right side Buttons */}
          <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
            <div className={`md:block space-x-3 gap-4 hidden`}>
              <Link to="/login">
                <button
                  type="button"
                  className="text-[#222] bg-[#FDDE55] hover:bg-[#ffd310] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button
                  type="button"
                  className="text-[#222] bg-[#FDDE55] hover:bg-[#ffd310] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center "
                >
                  Register
                </button>
              </Link>
            </div>

            <div className={`flex items-center space-x-3 gap-4`}>
              <Link className="hidden md:flex" to="/login">
                <button
                  type="button"
                  className="text-[#222] bg-[#FDDE55] hover:bg-[#ffd310] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Logout
                </button>
              </Link>
            </div>

            {/* Hamburger button */}
            <button
              onClick={handleHamburger}
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden text-white "
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Middle Part */}
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 ">
              {links}
            </ul>
          </div>
        </div>

        {/* For Small device */}
        <div className={`lg:hidden fixed p-6 z-[99] duration-500 md:w-[50%] w-[80%] h-screen top-0 text-white bg-[#5BBCFF] ${hamburger ? "right-0" : "right-[-350px] md:right-[-700px]"}`}>
          <button onClick={handleHamburger} className="text-2xl">
            <IoMdClose />
          </button>
          <ul className="font-semibold text-xl mt-6 ">{links}</ul>

          <div className={`md:hidden flex gap-4 mt-6`}>
            <Link onClick={handleHamburger} to="/login">
              <button
                type="button"
                className="text-[#111] bg-[#FDDE55] hover:bg-[#FDDE55] px-2 py-1 rounded-lg font-semibold"
              >
                Login
              </button>
            </Link>
            <Link onClick={handleHamburger} to="/register">
              <button
                type="button"
                className="text-[#111] bg-[#FDDE55] hover:bg-[#FDDE55] px-2 py-1 rounded-lg font-semibold"
              >
                Register
              </button>
            </Link>
          </div>
          <div className={`md:hidden flex gap-4 mt-6`}>
            <Link
              onClick={() => {
                handleHamburger();
              }}
              to="/login"
            >
              <button
                type="button"
                className="text-[#111] bg-[#FDDE55] hover:bg-[#FDDE55] px-2 py-1 rounded-lg font-semibold"
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
