import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopicsCard from './TopicsCard';

const Topics = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        fetch('https://awesome-clicks-server.vercel.app/topics')
            .then(res => res.json())
            .then(data => setTopics(data))
    }, [])
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 lg:ml-20'>
                {
                    topics.map(topic => <TopicsCard
                        key={topic._id}
                        topic={topic}
                    ></TopicsCard>)
                }
            </div>
            <div className='text-center my-10'>
                <Link to="/services"><button className="btn btn-outline btn-secondary w-1/3 font-bold text-1xl">See All</button></Link>
            </div>
        </div>
    );
};

export default Topics;