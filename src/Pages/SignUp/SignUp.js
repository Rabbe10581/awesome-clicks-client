import React from 'react';
import { Link } from 'react-router-dom';
import signUpImg from "../../Assets/login/signup.jpg"

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl bg-base-100 lg:py-14 lg:px-7">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p>Allready have an account? <Link to="/login">login</Link></p>
                </div>
                <div className="text-center lg:w-1/2 lg:text-left">
                    <img className='w-full' src={signUpImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;