import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data
  })

  const handelMakeAdmin = user =>{
    fetch(`https://food-resturant-server.vercel.app/users/admin/${user._id}`,{
      method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount){
        refetch()
        Swal.fire({
          title: `${user.name} is admin now!`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
    })
  }

  const handelDelete = (user) => {
    Swal.fire({

      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {
          fetch(`https://food-resturant-server.vercel.app/users/admin/${user._id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  if (data.deletedCount > 0) {
                      refetch();
                      Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                      )
                  }
              })
      }
  })
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
                    user.role === 'admin' ? 'admin' :
                      
                      <button onClick={() => handelMakeAdmin(user)} className="btn btn-ghost mt-4 bg-[#D1A054] text-white"><FaUsers></FaUsers></button>
                      
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