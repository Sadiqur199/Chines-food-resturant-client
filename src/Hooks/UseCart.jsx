import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import UseAuth from './UseAuth';
const UseCart = () => {
  const { user ,loading} = UseAuth()
  const token = localStorage.getItem('access-token')
  const [axiosSecure] = useAxiosSecure();
  const { isLoading,refetch,data:cart = [] } = useQuery({
    queryKey: ['carts',user?.email],
    enabled: !loading,
    // queryFn: async () =>{
    //   const response = await fetch(`https://food-resturant-server.vercel.app/carts?email=${user?.email}`,{
    //     headers:{
    //       authorization: `bearer${token}`
    //     }
    //   })
    //   return response.json()
    // },
    queryFn: async () =>{
      const response = await axiosSecure(`/carts?email=${user?.email}`)
      // console.log('axios',response)
      return response.data
    },
  })

  return[cart,refetch]

};

export default UseCart;