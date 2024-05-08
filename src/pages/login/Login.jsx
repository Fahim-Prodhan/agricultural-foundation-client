/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo-FUNDAPROTAN.png'

const Login = () => {
    const [eye, setEye] = useState(false)

    const togglePassword = () => {
        setEye(!eye)
    }

    return (
        <div className='max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12'>
            <div className="relative md:top-10">
                <div className="grid md:grid-cols-2 gap-7">
                    <div className="lg:py-0 py-4 ">
                        <div className='flex justify-center lg:justify-start my-6'>
                            <img className='lg:w-[40%] w-1/2'src={logo} alt="" />
                        </div>
                        <div >
                            <h1 className='font-bold text-xl md:text-3xl lg:text-4xl text-center lg:text-left'>Login your Fundaportan account</h1>
                            <p className='flex items-center gap-1 my-4 lg:text-xl'><span className='text-2xl text-[#68D2E8]'><TiTick /></span>Create a campaign in minutes</p>
                            <p className='flex items-center gap-1 my-4 lg:text-xl'><span className='text-2xl text-[#68D2E8]'><TiTick /></span>Seamlessly integrate with your website</p>
                            <p className='flex items-center gap-1 my-4 lg:text-xl'><span className='text-2xl text-[#68D2E8]'><TiTick /></span>Accept nearly every payment method</p>
                        </div>
                    </div>
                    <div className="card w-full  shadow-2xl bg-base-100">
                        <h1 className="text-center text-5xl font-bold py-4">Login</h1>
                        <form className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" placeholder="username" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 label">
                                    <input name="password" type={eye ? "text" : "password"} className="grow" placeholder="password" />
                                    <span onClick={togglePassword} className="text-xl -ml-10 md:-ml-0">{eye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}</span>
                                </label>
                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <Link to='/forgot-password' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <label className="label">
                                    <p className="pt-2 text-sm">Don't have an account? <span className="text-blue-400"><Link to='/register'>Register</Link></span></p>
                                </label>
                            </div>
                            <div className="form-control mt-6 col-span-2">
                                <button className="btn bg-[#FDDE55]">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;