import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseCart from '../../../Hooks/UseCart';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
  const [cart,refetch] = UseCart()
  const total = cart.reduce((sum, item) => item.price + sum, 0)


  const handelDelete = (item) => {
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
          fetch(`https://food-resturant-server.vercel.app/carts/${item._id}`, {
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
        <title>Chines Food || cart</title>
      </Helmet>
      <div>
        <SectionTitle subheading={'My Cart'} heading={'Wanna Add More'}></SectionTitle>
      </div>
      <div className='uppercase font-semibold h-[60px] flex items-center justify-evenly'>
        <h3 className='text-2xl'>Total Cart : {cart.length}</h3>
        <h3 className='text-2xl'>Total Price : ${total}</h3>
        <Link to="/dashboard/payment"><button className="btn btn-warning btn-small">Pay</button></Link>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => <tr
                key={item._id}
              >
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td className='text-end'>${item.price}</td>
                <td>
                  <button onClick={() => handelDelete(item)} className="btn btn-ghost bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;