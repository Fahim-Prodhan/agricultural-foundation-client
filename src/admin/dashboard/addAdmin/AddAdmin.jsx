import React, { useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';


const AddAdmin = () => {
    const [eye, setEye] = useState(false)

    const togglePassword = () => {
        setEye(!eye)
    }
    return (
        <div>
            <div className="card w-full lg:px-24 mt-12 shadow-2xl bg-base-100">
                        <h1 className="text-center text-5xl font-bold py-4">Add Admin</h1>
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
                                    <input name="password" type={eye ? "text" : "password"} className="grow" placeholder="password" />
                                    <span onClick={togglePassword} className="text-xl -ml-10 md:-ml-0">{eye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 label">
                                    <input name="password" type={eye ? "text" : "password"} className="grow" placeholder="confirm password" />
                                    <span onClick={togglePassword} className="text-xl -ml-10 md:-ml-0">{eye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}</span>
                                </label>
                            </div>                          
                            <div className="form-control mt-6 col-span-2">
                                <button className="btn bg-[#FDDE55]">Register</button>
                            </div>
                        </form>
                    </div>
        </div>
    );
};

export default AddAdmin;