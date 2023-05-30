import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const UseCart = () => {
  const { user } = useContext(AuthContext)

  const { isLoading,refetch,data:cart = [] } = useQuery({
    queryKey: ['carts',user?.email],
    queryFn: async () =>{
      const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
      return response.json()
    },
  })

  return[cart,refetch]

};

export default UseCart;