import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, details } = service;
    return (
        <div className="card card-compact lg:w-80 bg-base-100 shadow-xl">
            <figure><img className='lg:h-72' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: <span>${price}</span></p>
                <p>{details.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-warning text-white">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;