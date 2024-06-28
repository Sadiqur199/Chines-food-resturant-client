import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../Hooks/UseCart';

const FoodCart = ({ item }) => {
  const { name, image, price, recipe, _id } = item
  const { user } = useContext(AuthContext)
  const [, refetch] = UseCart()
  const navigate = useNavigate()
  const location = useLocation()

  const handelViewDetails = () =>{
    console.log('view details')
  }

  const handelAddToCart = item => {
    console.log(item)
    if (user && user.email) {
      const cartItem = { foodId: _id, name, image, price, email: user.email }
      fetch('https://food-resturant-server.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch() //update the number of addToCart
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food Added add to cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please login to order food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">{name}</h2>
        <p>{recipe}</p>
        <div className='flex justify-between'>
          <div className="card-actions ">
            <Link to={`/menu/${_id}`} onClick={ handelViewDetails} className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-2 mt-2 mb-4">View Details</Link>
          </div>
          <div className="card-actions">
            <button onClick={() => handelAddToCart(item)} className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-2 mt-2 mb-4">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;