import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
  const {user} = UseAuth()
  const [axiosSecure] = useAxiosSecure()

  const {data: stats = {}} = useQuery({
    queryKey : ['/admin-stats'],
    queryFn: async () =>{
      const res = await axiosSecure('/admin-stats')
      return res.data;
    }
  })

  return (
    <div className='w-full m-4'>
      <h2 className='text-3xl'>Hi! ,Welcome  {user.displayName}</h2>
    </div>
  );
};

export default AdminHome;