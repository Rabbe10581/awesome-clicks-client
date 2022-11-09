import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Topics from './Topics/Topics';

const Home = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-1/2 text-center my-auto'>
                    <h2 className='text-4xl'>This is My Nature Love <br />Photography Website</h2>
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