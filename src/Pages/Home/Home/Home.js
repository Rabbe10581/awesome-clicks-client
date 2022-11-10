import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Topics from './Topics/Topics';

const Home = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-1/2 text-center my-auto'>
                    <h2 className='text-4xl'>This is My <span className='text-yellow-400 text-5xl'>Awesome Click</span> <br /><span className='text-orange-500 py-4'>Photography Website</span></h2>
                </div>
                <div className='w-1/2'>
                    <Banner></Banner>
                </div>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;