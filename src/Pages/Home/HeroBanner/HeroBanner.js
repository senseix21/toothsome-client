import React from 'react';
import heroImg from '../../../assets/images/chair.png'

const HeroBanner = () => {
    return (
        <div className='mx-auto'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse my-10">
                    <img src={heroImg} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold"><span className='text-primary'>Toothsome Dental Clinic: </span> Where Your Smile is Our Top Priority</h1>
                        <p className="py-6">Transform Your Smile with Toothsome Dental Clinic - The Expert Destination for Comprehensive Dental Care. Experience Top-notch Services from Skilled Dentists, State-of-the-Art Technology, and Personalized Treatment Plans. Let Us Help You Achieve a Healthier, Happier Smile Today!</p>
                        <btn className='btn btn-primary'>Getting Started</btn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;