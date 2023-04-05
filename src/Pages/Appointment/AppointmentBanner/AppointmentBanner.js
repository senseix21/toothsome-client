import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ selected, setSelected }) => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content max-w-lg flex-col lg:flex-row-reverse">
                    <img src={chair} className=" rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker className='bg-base-200 p-6 rounded-xl'
                            mode='single'
                            selected={selected}
                            onSelect={setSelected}
                        />
                        <h4 className=' text-lg text-center'> You have selected <span className='text-primary'>{format(selected, 'PP')} </span>.</h4>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default AppointmentBanner;