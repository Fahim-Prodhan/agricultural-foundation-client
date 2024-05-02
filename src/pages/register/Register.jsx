import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';

const Register = () => {
    const [eye, setEye] = useState(false)

    const togglePassword = () => {
        setEye(!eye)
    }

    return (
        <div>
            <div className="min-h-screen ">
                <div className="grid md:grid-cols-2 gap-7">
                    <div className="md:text-left  lg:py-0 py-4 lg:place-self-center">
                        <h1 className='font-bold text-xl md:text-3xl lg:text-4xl text-center'>Create your Donorbox account</h1>
                        <p className='flex items-center gap-1 my-4 lg:text-xl'><span className='text-2xl text-[#68D2E8]'><TiTick /></span>Create a campaign in minutes</p>
                        <p className='flex items-center gap-1 my-4 lg:text-xl'><span className='text-2xl text-[#68D2E8]'><TiTick /></span>Seamlessly integrate with your website</p>
                        <p className='flex items-center gap-1 my-4 lg:text-xl'><span className='text-2xl text-[#68D2E8]'><TiTick /></span>Accept nearly every payment method</p>
                    </div>
                    <div className="card w-full  shadow-2xl bg-base-100">
                        <h1 className="text-center text-5xl font-bold py-4">Register</h1>
                        <form className="card-body lg:grid md:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input  type="text" placeholder="first name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="last name" className="input input-bordered"  />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" placeholder="username" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 label">
                                    <input name="password" type={eye ? "text" : "password"} className="grow" placeholder="Password" />
                                    <span onClick={togglePassword} className="text-xl -ml-10 md:-ml-0">{eye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 label">
                                    <input name="password" type={eye ? "text" : "password"} className="grow" placeholder="Password" />
                                    <span onClick={togglePassword} className="text-xl -ml-10 md:-ml-0">{eye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}</span>
                                </label>
                            </div>                          

                            <div className="form-control col-span-2">
                                <label className="label">
                                    <p className="pt-2 text-sm">Already have an account? <span className="text-blue-400"><Link to='/login'>Login</Link></span></p>
                                </label>
                                <label className="label justify-start gap-3 cursor-pointer">
                                    <input type="checkbox" className="checkbox" />
                                    <span className="label-text">I have read and agree to the <span><a className='text-blue-400'>terms & conditions and privacy policy</a></span></span>
                                </label>
                            </div>
                            <div className="form-control mt-6 col-span-2">
                                <button className="btn bg-[#FDDE55]">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;