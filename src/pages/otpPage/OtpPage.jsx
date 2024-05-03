import React from 'react';

import logo from '../../assets/images/Logo-FUNDAPROTAN.png'

const OtpPage = () => {
    return (
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
                        <button className="btn bg-[#FDDE55]">Confirm</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default OtpPage;