import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signUpImg from "../../Assets/login/signup.jpg"
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl bg-base-100 lg:py-14 lg:px-7">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center'>Allready have an account? <Link className='text-secondary font-bold' to="/login">Log In</Link></p>
                </div>
                <div className="text-center lg:w-1/2 lg:text-left">
                    <img className='w-full' src={signUpImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;