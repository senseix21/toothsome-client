import React from 'react';

const Users = ({ user, i, handleMakeAdmin, deleteUser }) => {
    const { name, email } = user;
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{user?.role !== 'admin' && <button onClick={handleMakeAdmin} className='btn btn-primary'>Make Admin</button>}</td>
            <td><button onClick={deleteUser} className='btn'>Remove</button></td>
        </tr>
    );
};

export default Users;