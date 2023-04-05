import React from 'react';

const AvailableOptions = ({ option, setTreatments }) => {
    const { slots, name, price } = option;
    return (
        <div className="card bg-blue-200  shadow-xl" >
            <div className="card-body items-center  text-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{slots.length ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} Options</p>
                <p className='font-bold'>${price}</p>

            </div>
            <div className="card-actions justify-center">
                <label onClick={() => setTreatments(option)} htmlFor="bookingModal" className="btn mb-3">Appointment</label>

            </div>
        </div>

    );
};

export default AvailableOptions;