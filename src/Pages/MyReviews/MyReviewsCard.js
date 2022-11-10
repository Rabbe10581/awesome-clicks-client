import React from 'react';

const MyReviewsCard = ({ myReview, handleDelete }) => {
    console.log(myReview);
    const { _id, reviewText, serviceName, email } = myReview;
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceName}</h2>
                <p className='bg-slate-500 p-5 rounded-md'>{reviewText}</p>
                <p>{email}</p>
                <div className='flex'>
                    <h3 className='btn btn-ghost lg:mr-8'>Edit</h3>
                    <h3 onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</h3>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;