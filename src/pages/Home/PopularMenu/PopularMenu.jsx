import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import UseMenu from '../../../Hooks/UseMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
  const [menu] = UseMenu()
  const popular = menu.filter(item=> item.category === 'popular')

  return (
    <section className='mb-16 px-5'>
      <SectionTitle
        subheading={'Check It Out'}
        heading={'from our menu'}
      ></SectionTitle>
      <div  className="grid md:grid-cols-2 gap-10 mt-10 mb-10">
        {
          popular.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
      <div className='text-center'>
        <Link to='/order'><button className='btn btn-outline border-0 border-b-2  mt-4'>View More...</button></Link>
      </div>
    </section>
  );
};

export default PopularMenu;