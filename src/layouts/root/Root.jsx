import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className=''>
            <div className="sticky top-0 z-[99]"><Navbar></Navbar></div>
            <div className='max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;