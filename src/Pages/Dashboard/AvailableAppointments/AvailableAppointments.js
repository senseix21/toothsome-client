import React from 'react';
import { Link } from 'react-router-dom';

const AvailableAppointments = ({ appointment, i, handlePaymentRequest }) => {
    console.log(appointment)
    const { patient, treatment, slot, price } = appointment;
    return (

        <>
            {/* row 1 */}
            <tr>
                <th>{i + 1}</th>
                <td>{patient}</td>
                <td>{treatment}</td>
                <td>{slot}</td>
                <td>
                    {
                        appointment.price && !appointment.paid && <Link to={`/dashboard/payment/${appointment._id}`}><button onClick={handlePaymentRequest} className='btn '>Pay</button>
                        </Link>
                    }

                    {
                        appointment.price && appointment.paid && <button className='btn btn-accent'>Paid</button>
                    }
                </td>
            </tr>
        </>

    );
};

export default AvailableAppointments;