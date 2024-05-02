import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const Root = () => {
    return (
        <div className=''>
            <div className="sticky top-0 z-[99]"><Navbar></Navbar></div>
        </div>
    );
};

export default Root;