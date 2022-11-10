import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const ShowReviews = ({ id }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://awesome-clicks-server.vercel.app/serviceReview?id=${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [id])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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