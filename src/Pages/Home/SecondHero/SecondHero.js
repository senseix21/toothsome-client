import React from 'react';
import treatMent from '../../../assets/images/treatment.png'

const SecondHero = () => {
    return (
        <div className='mx-auto'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse lg:mx-32">
                    <img src={treatMent} className="rounded-lg lg:w-1/3 shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold"><span className='text-primary'>Exceptional Dental Care,</span> on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <btn className='btn btn-primary'>Getting Started</btn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondHero;