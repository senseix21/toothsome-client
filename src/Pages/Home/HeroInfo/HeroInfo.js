import React from 'react';
import { FaClock, FaMap, FaPhone } from 'react-icons/fa';

const HeroInfo = () => {
    return (
        <div className='grid grid-cols-3 gap-5 mx-auto'>
            <div className="card w-96 bg-primary text-neutral-content">
                <div className="card-body flex-row items-center justify-between">
                    <div>
                        <FaClock className='text-6xl'></FaClock>
                    </div>
                    <div>
                        <h2 className="card-title">Opensing Hours</h2>
                        <p>We are open monday to friday from 9 AM to 6 PM</p>

                    </div>
                </div>
            </div>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body flex-row items-center justify-between">
                    <div>
                        <FaMap className='text-6xl'></FaMap>
                    </div>
                    <div>
                        <h2 className="card-title">Visit Our Location</h2>
                        <p>Brooklyn, NY 10036, United States</p>

                    </div>
                </div>
            </div>
            <div className="card w-96 bg-primary text-neutral-content">
                <div className="card-body flex-row items-center ">
                    <div>
                        <FaPhone className='text-6xl'></FaPhone>
                    </div>
                    <div>
                        <h2 className="card-title">Contact us now </h2>
                        <p>+000 123 456789</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroInfo;