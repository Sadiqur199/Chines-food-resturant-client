import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Fetured = () => {
  return (
    <div className='featured-Item bg-fixed text-white  my-20'>
      <div className=" bg-slate-500 bg-opacity-40 pb-8 pt-20">
      <SectionTitle 
      subheading={'Check It Out'}
      heading={'Featured Item'}
      ></SectionTitle>
      </div>
      <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40'>
        <div>
        <img src={featured} alt="" />
        </div>

        <div className='md:ml-16'>
          <p>May 10 , 2023</p>
          <p className='uppercase'>When Can I get Some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non molestias, suscipit quod magnam placeat ea quisquam aspernatur unde sequi nemo nisi nobis, sit, cupiditate explicabo hic. Impedit inventore, quaerat modi unde maxime odit laborum voluptatem suscipit incidunt labore?</p>
          <button className='btn btn-outline border-0 border-b-2 mt-4'>Read More...</button>
        </div>

      </div>
    </div>
  );
};

export default Fetured;