import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const ShowReviews = ({ id }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/serviceReview?id=${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [id])

    return (
        <div className='text-center'>
            <h2 className='text-white text-3xl'>Total {reviews.length} reviews</h2>
            {
                reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                ></ReviewCard>)
            }
        </div>
    );
};

export default ShowReviews;