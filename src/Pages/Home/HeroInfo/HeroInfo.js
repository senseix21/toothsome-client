import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';


const HeroInfo = () => {
    const InfoData = [
        {
            id: 1,
            title: 'Opening Hours',
            desc: 'We are open monday to friday from 9 AM to 6 PM',
            icon: clock,
            bg: 'bg-primary',
        },
        {
            id: 2,
            title: 'Visit Our Location',
            desc: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bg: 'bg-gray-600',

        },
        {
            id: 3,
            title: 'Contact Us Now',
            desc: '+000 123 456789',
            icon: phone,
            bg: 'bg-primary',

        },
    ]
    return (
        <div className='grid lg:grid-cols-3 gap-10  mx-auto my-10'>
            {
                InfoData.map(info =>
                    <div className={`card p-6 lg:card-side card-normal bg-base-100 shadow-xl ${info.bg} text-white text-center`} >
                        <figure className="">
                            <img src={info.icon} alt="" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title justify-center">{info.title}</h2>
                            <p>{info.desc}</p>

                        </div>
                    </div>)
            }
        </div>
    );
};

export default HeroInfo;