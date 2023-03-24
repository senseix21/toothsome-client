import React from 'react';
import heroImg from '../../../assets/images/chair.png'

const HeroBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 bg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroImg} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold" ><span className='text-primary'>Toothsome Dental Clinic: </span> Where Your Smile is Our Top Priority</h1>
                        <p className="py-6">Transform Your Smile with Toothsome Dental Clinic - The Expert Destination for Comprehensive Dental Care. Experience Top-notch Services from Skilled Dentists, State-of-the-Art Technology, and Personalized Treatment Plans. Let Us Help You Achieve a Healthier, Happier Smile Today!</p>
                        <button className="btn btn-primary ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;