import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const { _id, title } = useLoaderData();
    console.log(_id);
    const { user } = useContext(AuthContext);
    // console.log(user);

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

        //call post to create review in db
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Reviewed placed successfully', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    // alert('Reviewed placed successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));


    }

    return (
        <div className='text-center my-14'>
            <form onSubmit={handleReview}>
                <div>
                    <textarea name='message' className="textarea textarea-info w-full max-w-xs" placeholder="Type your review here" required /><br />
                    <input name='email' type="email" defaultValue={user?.email} placeholder="Type here" className="input input-bordered input-error w-full max-w-xs my-3" readOnly /><br />
                    <input type="submit" className="btn btn-accent text-white font-bold w-full max-w-xs mx-2" value="Post your Review" />
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Reviews;