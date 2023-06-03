import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';


const AddItem = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };
  console.log(errors);

  return (
    <div className='w-full'>
      <SectionTitle subheading={"what's new ?"} heading={'Add AN Item'}></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)} className='ml-20 bg-[#F3F3F3] p-16 rounded'>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input type="text" placeholder="Recipe Name" {...register("name", {required: true, maxLength: 120})}  className="input input-bordered w-full max-w-xs" />
        </div>

        <div className='flex mt-3'>
          <div className="form-control w-full max-w-xs mr-5">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select {...register("category", { required: true })} className="select select-bordered">
              <option disabled selected>category</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Drinks</option>
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
          <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
        </div>

        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input type="file" className="file-input file-input-bordered w-full max-w-xs " />
        </div>
        
        <input type="submit" value="Add Item" className='btn btn-small w-full mt-3 bg-[#2E89FF] text-white border-none' />

      </form>
    </div>
  );
};

export default AddItem;