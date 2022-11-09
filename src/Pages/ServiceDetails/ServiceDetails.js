import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, img, price, title, details } = useLoaderData();
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div>
                <div className='w-1/2'>
                    <figure><img className='w-full' src={img} alt="Movie" /></figure>
                </div>
                <div className="card-body w-1/2">
                    <h2 className="card-title">{title}</h2>
                    <p><span>${price}</span> only of this package.</p>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;