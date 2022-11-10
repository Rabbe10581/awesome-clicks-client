import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {

    const { user } = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState([])
    console.log(myReviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('reviewToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {

            fetch(`http://localhost:5000/reviews/${id}`, {

                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('You have deleted successfully');
                        const remaining = myReviews.filter(order => order._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-6 lg:my-6'>

                {
                    myReviews.map(myReview => <MyReviewsCard
                        key={myReview._id}
                        myReview={myReview}
                        handleDelete={handleDelete}
                    ></MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;