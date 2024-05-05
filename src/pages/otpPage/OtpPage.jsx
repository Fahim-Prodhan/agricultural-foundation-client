import React from 'react';

import logo from '../../assets/images/Logo-FUNDAPROTAN.png'
import { Link } from 'react-router-dom';

const OtpPage = () => {
    return (
        <div className='max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12'>
            <div className='flex justify-center'>
                <div className="lg:py-0 py-4">
                    <div className='flex justify-center my-1'>
                        <img className='w-32' src={logo} alt="" />
                    </div>
                    <div className='space-y-3' >
                        <h1 className='font-bold text-xl md:text-3xl lg:text-4xl text-center'>Reset Your Account Password</h1>
                    </div>
                    <form action="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">OTP</span>
                            </label>
                            <input type="text" placeholder="Otp" className="input input-bordered rounded-md" required />
                        </div>
                        <div className='text-center mt-4'>
                            <Link to='/reset-password'><button className="btn bg-[#FDDE55]">Confirm</button></Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default OtpPage;