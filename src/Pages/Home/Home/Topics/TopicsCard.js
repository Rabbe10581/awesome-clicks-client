import React from 'react';
import { Link } from 'react-router-dom';

const TopicsCard = ({ topic }) => {
    const { _id, img, price, title, details } = topic;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-2xl">
            <figure><img className='lg:h-72' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: <span>${price}</span></p>
                <p>{details.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-secondary text-white">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopicsCard;