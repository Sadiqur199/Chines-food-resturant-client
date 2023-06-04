import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import UseMenu from '../../../Hooks/UseMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaTrashAlt } from 'react-icons/fa';

const ManageItem = () => {
  const [menu, ,refetch] = UseMenu()
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = item => {
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

        axiosSecure.delete(`/menu/${item._id}`)
          .then(res => {
            console.log('deleted res', res.data);
            if (res.data.deletedCount > 0) {
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
    <div className="w-full bg-[#F6F6F6] p-10">
      <SectionTitle subheading={'Hurry Up'} heading="Manage All Items"></SectionTitle>
      <div className="overflow-x-auto w-full bg-[#FFFFFF] ">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr className='bg-[#D1A054]'>
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              menu.map((item, index) => <tr key={item._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.category}
                </td>
                <td className="text-right">${item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;