import React from 'react';
import appointmentImg from '../../../assets/images/doctor.png';
import bg from '../../../assets/images/appointment.png'


const Appointment = () => {
    return (
        <section className='lg:mt-32' style={{ background: `url(${bg})` }}>
            <div className="hero bg-gray-600 bg-transparent text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={appointmentImg} className="-mt-32 lg:w-1/2 hidden lg:block md:block rounded-lg" alt='' />
                    <div>
                        <h4 className='font-bold text-primary'>MAKE APPOINTMENT</h4>
                        <h1 className="text-5xl font-bold">Make an <span className='text-primary'>appointment</span> Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;