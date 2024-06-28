import React from 'react';
import UseAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
const {user,loading} = UseAuth();
const [axiosSecure] = useAxiosSecure()
//use axios secure with react query
const {data: isAdmin , isLoading:isAdminLoading} = useQuery({
  queryKey:['isAdmin', user?.email],
  enabled:!loading,
  queryFn: async () => {
    const res = await axiosSecure.get(`/users/admin/${user?.email}`)
    console.log('isAdmin Response',res)
    return res.data.admin
  }
})

return [isAdmin,isAdminLoading]

};

export default UseAdmin;