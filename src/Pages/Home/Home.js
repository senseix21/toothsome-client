import React from 'react';
import Appointment from './Appointment/Appointment';
import HeroBanner from './HeroBanner/HeroBanner';
import HeroInfo from './HeroInfo/HeroInfo';
import NewsLetter from './NewsLetter/NewsLetter';
import Review from './Review/Review';
import SecondHero from './SecondHero/SecondHero';
import ServicesSection from './ServicesSection/ServicesSection';

const Home = () => {
    return (
        <div className='mx-5'>
            <HeroBanner></HeroBanner>
            <HeroInfo></HeroInfo>
            <ServicesSection></ServicesSection>
            <SecondHero></SecondHero>
            <Appointment></Appointment>
            <Review></Review>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;