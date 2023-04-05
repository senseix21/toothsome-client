import React, { useState } from 'react';
import bg from '../../../assets/images/appointment.png';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvaiableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <div className='' style={{ background: `url${bg}` }}>
                <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
                <AvailableAppointment selected={selected}></AvailableAppointment>

            </div>
        </div>
    );
};

export default Appointment;