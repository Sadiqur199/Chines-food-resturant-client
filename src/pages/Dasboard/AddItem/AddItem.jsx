import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN


const AddItem = () => {
  const [axiosSecure] = useAxiosSecure()
  const { register, handleSubmit , reset} = useForm();
  const onSubmit = data => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const formData = new FormData()
    formData.append('image', data.image[0])

    fetch(image_hosting_url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imgResponse => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url
          const { name, category, price, recipe } = data;
          const newItem = { name, price: parseFloat(price), category, recipe, image: imgUrl }
          console.log(newItem)
          axiosSecure.post('/menu', newItem)
            .then(data => {
              console.log('after posting new menu item', data.data)
              if (data.data.insertedId) {
                reset()
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'New Item Added',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
        }
      })
  };
  // console.log(errors);
  // console.log(image_hosting_token)


  return (
    <div className='w-full'>
      <SectionTitle subheading={"what's new ?"} heading={'Add AN Item'}></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)} className='ml-20 bg-[#F3F3F3] p-16 rounded'>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input type="text" placeholder="Recipe Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full" />
        </div>

        <div className='flex mt-3'>
          <div className="form-control w-full max-w-xs mr-5">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select defaultValue='category' {...register("category", { required: true })} className="select select-bordered">
              <option disabled>category</option>
              <option>pizza</option>
              <option>soup</option>
              <option>salad</option>
              <option>dessert</option>
              <option>drinks</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input type="number" placeholder="price"  {...register("price", { required: true })} className="input input-bordered w-full max-w-xs" />
          </div>
        </div>

        <div className="form-control mt-3">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
        </div>

        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs " />
        </div>

        <input type="submit" value="Add An Item" className='btn btn-small mt-3 bg-[#8A6225] text-white border-none' />

      </form>
    </div>
  );
};

export default AddItem;