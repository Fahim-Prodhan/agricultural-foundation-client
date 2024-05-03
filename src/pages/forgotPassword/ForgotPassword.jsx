import React from 'react';
import logo from '../../assets/images/Logo-FUNDAPROTAN.png'


const ForgotPassword = () => {
    return (
        <div className='flex justify-center'>
            <div className="lg:py-0 py-4">
                <div className='flex justify-center my-1'>
                    <img className='w-32' src={logo} alt="" />
                </div>
                <div className='space-y-3' >
                    <h1 className='font-bold text-xl md:text-3xl lg:text-4xl text-center'>Reset Your Account Password</h1>
                    <p className='text-xl lg:px-56 text-center'>Please provide your account email. We will email you the instructions to reset your account.</p>
                </div>
                <form action="">
                    <div className="form-control lg:px-60">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered rounded-md" required />
                    </div>
                    <div className='text-center mt-4'>
                        <button className="btn bg-[#FDDE55]">Rest Password</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ForgotPassword;