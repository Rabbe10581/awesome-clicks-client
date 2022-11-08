import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='flex'>
            <div className='w-1/2 text-center my-auto'>
                <h2 className='text-4xl'>This is My Nature Love <br />Photography Website</h2>
            </div>
            <div className='w-1/2'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;