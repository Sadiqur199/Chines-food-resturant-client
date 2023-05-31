import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users')
    return res.json()
  })

  const handelMakeAdmin = id =>{
    
  }

  const handelDelete = () => {

  }

  return (
    <div className='w-full'>
      <Helmet>
        <title>Chines Food || All Users</title>
      </Helmet>
      <h2 className='text-3xl font-semibold my-4'>Total Users Here : {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role === 'admin' ? 'admin'
                      :
                      <button nClick={() => handelMakeAdmin(user._id)} className="btn btn-ghost mt-4 bg-[#D1A054] text-white"><FaUsers></FaUsers></button>
                      
                  }

                </td>

                <td>
                  <button onClick={() => handelDelete(user)} className="btn btn-ghost bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;