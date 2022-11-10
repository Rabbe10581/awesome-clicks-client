import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import loginImg from "../../Assets/login/login.jpg"
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import SocialLogIn from '../Shared/SocialLogIn/SocialLogIn';

const Login = () => {
    const { user, login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathName || "/"

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(err => console.error(err))

    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user, from, navigate])

    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row-reverse ">

                <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl bg-base-100 lg:py-14 lg:px-7">
                    <div>
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="example@gmail.com" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary">Login</button>
                            </div>
                        </form>
                        <p className='text-center'>New to Awesome Clicks? <Link className='text-secondary font-bold' to="/signup">Sign Up</Link></p>
                        <SocialLogIn></SocialLogIn>
                    </div>

                </div>
                <div className="text-center lg:w-1/2 lg:text-left">
                    <img className='w-full' src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;