import React from 'react';

const DoctorsList = ({ doctor, i, handleDeleteDoctor }) => {
    const { name, speciality, photo, _id } = doctor;
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th>{i + 1}</th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="doctorimage" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    <p className='font-semibold'>{speciality}</p>
                </td>
                <td><button onClick={() => handleDeleteDoctor(_id)} className='btn btn-accent'>Delete</button></td>

            </tr>
        </tbody>
    );
};

export default DoctorsList;