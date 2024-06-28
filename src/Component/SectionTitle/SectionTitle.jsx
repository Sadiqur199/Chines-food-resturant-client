import React from 'react';

const SectionTitle = ({heading,subheading}) => {
  return (
    <div className='md:w-4/12 mx-auto text-center my-4'>
      <p className='text-yellow-500 mb-3'>---{subheading}---</p>
      <h3 className='text-3xl uppercase border-y-2 py-4'>{heading}</h3>
    </div>
  );
};

export default SectionTitle;