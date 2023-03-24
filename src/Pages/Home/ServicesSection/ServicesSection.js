import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const ServicesSection = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]
    return (
        <div className='my-10 mx-auto'>
            <h3 className='font-bold text-primary text-center'>Our Services</h3>
            <h3 className='text-3xl font-semibold text-center '>Awesome Dental Services</h3>
            <div className='grid lg:grid-cols-3 gap-5 my-5'>
                {
                    servicesData.map(service =>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-20 pt-10">
                                <img src={service.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{service.name}</h2>
                                <p>{service.description}</p>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ServicesSection;