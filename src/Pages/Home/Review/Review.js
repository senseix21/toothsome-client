import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import user from '../../../assets/images/people1.png';

const Review = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winston Churchill',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place: 'California',
            img: user,
        },
        {
            id: 2,
            name: 'Jhonny Bravos',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place: 'California',
            img: user,
        },
        {
            id: 3,
            name: 'Adams Notchills',
            desc: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            place: 'California',
            img: user,
        },
    ];
    return (
        <div className='my-10 mx-14'>
            <div className="flex items-center justify-between ">
                <div>
                    <h4 className='font-bold text-primary'>Testomonials</h4>
                    <h3 className='text-3xl font-bold'>What Our Patients Says</h3>
                </div>
                <img src={quote} className='w-14 lg:w-40' alt="" />

            </div>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =>

                        <div key={review.index} className="card  bg-base-100 shadow-xl mx-auto">
                            <div className="card-body">
                                <p>{review.desc}</p>
                                <div className='flex items-center justify-around'>
                                    <img src={user} className='w-12' alt="" />
                                    <p className='font-bold mx-2'>{review.name}</p>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Review;