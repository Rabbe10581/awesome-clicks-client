import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const { _id, title } = useLoaderData();
    console.log(_id);
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.message.value;
        const email = user?.email || 'unregistered';
        console.log(reviewText, email);

        const review = {
            service: _id,
            serviceName: title,
            reviewText,
            email
        }
    }


    return (
        <div className='text-center my-14'>
            <form onSubmit={handleReview}>
                <div>
                    <textarea name='message' className="textarea textarea-info w-full max-w-xs" placeholder="Type your review here"></textarea><br />
                    <input name='email' type="email" defaultValue={user?.email} placeholder="Type here" className="input input-bordered input-error w-full max-w-xs my-3" readOnly /><br />
                    <input type="submit" className="btn btn-accent text-white font-bold w-full max-w-xs mx-2" value="Post your Review" />
                </div>
            </form>
        </div>
    );
};

export default Reviews;