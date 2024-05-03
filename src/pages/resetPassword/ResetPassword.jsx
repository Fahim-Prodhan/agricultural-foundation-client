import React from 'react';
import logo from '../../assets/images/Logo-FUNDAPROTAN.png'

const ResetPassword = () => {
    return (
        <div className='flex justify-center'>
            <div className="lg:py-0 py-4">
                <div className='flex justify-center my-1'>
                    <img className='w-32' src={logo} alt="" />
                </div>
                <div className='space-y-3' >
                    <h1 className='font-bold text-xl md:text-3xl lg:text-4xl text-center'>Reset Your Account Password</h1>
                </div>
                <form >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">New Password</span>
                        </label>
                        <input type="text" placeholder="new password" className="input input-bordered rounded-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm New Password</span>
                        </label>
                        <input type="text" placeholder="confirm new password" className="input input-bordered rounded-md" required />
                    </div>
                    <div className='text-center mt-4'>
                        <button className="btn bg-[#FDDE55]">Reset Password</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ResetPassword;