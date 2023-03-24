import React from 'react';
import HeroBanner from './HeroBanner/HeroBanner';
import HeroInfo from './HeroInfo/HeroInfo';

const Home = () => {
    return (
        <div className='mx-5'>
            <HeroBanner></HeroBanner>
            <HeroInfo></HeroInfo>
        </div>
    );
};

export default Home;