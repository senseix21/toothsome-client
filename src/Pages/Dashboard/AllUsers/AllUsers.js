import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Users from './Users';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://toothsome-server.vercel.app/users`)
            const data = await res.json()
            return data;
        }
    });
    const handleMakeAdmin = (id) => {
        fetch(`https://toothsome-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('User role updated successfully')
                    refetch();
                }
            });
    };

    const deleteUser = (id) => {
        fetch(`https://toothsome-server.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('User deleted successfully');
                }
            })


    }


    return (
        <div>
            <h1 className='text-xl font-bold'>All users : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin </th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, i) =>
                                <Users
                                    key={user._id}
                                    user={user}
                                    i={i}
                                    handleMakeAdmin={() => handleMakeAdmin(user._id)}
                                    deleteUser={() => deleteUser(user._id)}
                                >
                                </Users>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;