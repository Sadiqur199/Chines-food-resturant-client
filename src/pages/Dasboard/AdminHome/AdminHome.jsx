import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';

const AdminHome = () => {
  const {user} = UseAuth()
  return (
    <div className='w-full m-4'>
      <h2 className='text-3xl'>Welcome Back , {user.displayName}</h2>
    </div>
  );
};

export default AdminHome;