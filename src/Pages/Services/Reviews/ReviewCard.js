import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ReviewCard = ({ review }) => {
    // console.log(review);
    const { user } = useContext(AuthContext)
    // console.log(user);
    const { _id, serviceName, reviewText, email } = review;

    return (
        <div className="card w-96 bg-neutral text-center text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceName}</h2>
                <p>{reviewText}</p>
                <p>{email}</p>
                <img src={user?.photoURL} alt="" />
                {/* <button className='btn btn-warning text-white'>X</button> */}
            </div>
        </div>
    );
};

export default ReviewCard;