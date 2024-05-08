/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import profile from '../../../assets/images/man.png'
import { NavLink } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaBlogger } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = () => {

    const [sidebar, SetSidebar] = useState(false)

    const handleSidebar = () => {
        SetSidebar(!sidebar)
    }

    return (
        <div>
            <button onClick={handleSidebar} type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className={`fixed left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${sidebar ? 'top-20' : '-translate-x-full'}`} aria-label="Sidebar">

                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <button onClick={handleSidebar} className='absolute right-4 text-white text-2xl md:hidden block'><IoCloseSharp /></button>

                        {/* Profile Pic and name */}
                        <div className='mb-4 '>
                            <img className='w-20 mx-3 ' src={profile} alt="" />
                            <h1 className='font-bold pt-1 text-white mx-3'>@Admin</h1>
                            <h1 className='text-xl font-bold text-white mx-3'>Fahim Prodhan</h1>
                            <div className='my-6 border'>
                                <hr />
                            </div>

                        </div>

                        {/* Others */}
                        <li>
                            <NavLink to='/admin/dashboard' className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                                <p className='text-2xl'>< MdDashboard /></p>
                                <span className="ms-3">Dashboard</span>

                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin/dashboard' className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                                <p className='text-2xl'>< GoProjectRoadmap /></p>
                                <span className="ms-3">Projects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/admin/dashboard' className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                                <p className='text-2xl'>< FaBlogger /></p>
                                <span className="ms-3">Blogs</span>
                                
                            </NavLink>
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;