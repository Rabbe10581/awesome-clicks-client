import React from 'react';

const ReviewCard = ({ review }) => {
    const { serviceName, reviewText, email } = review;
    return (
        <div className="card w-96 bg-neutral text-center text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceName}</h2>
                <p>{reviewText}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default ReviewCard;