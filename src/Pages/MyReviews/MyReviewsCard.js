import React from 'react';

const MyReviewsCard = ({ myReview, handleDelete }) => {
    console.log(myReview);
    const { reviewText, serviceName, email } = myReview;
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceName}</h2>
                <p className='bg-slate-500 p-5 rounded-md'>{reviewText}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default MyReviewsCard;