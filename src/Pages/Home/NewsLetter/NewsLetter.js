import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/appointment.png';
const NewsLetter = () => {
    return (
        <div className='my-10 py-6' style={{ background: `url(${bg})` }}>
            <div className='text-white text-center '>
                <h4 className='font-bold text-primary '>Contact us</h4>
                <h3 className='text-3xl font-bold'>Stay connected with us</h3>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent text-black mx-auto">
                <div className="card-body">
                    <form action="">
                        <div className="form-control">
                            <input type="text" placeholder="email address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="subject" className="input input-bordered my-2" />
                        </div>
                        <div>
                            <textarea placeholder="message" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;