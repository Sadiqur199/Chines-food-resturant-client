import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaHandPointDown, FaHandPointUp } from "react-icons/fa";





const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])
  useEffect(() => {
    fetch('https://food-resturant-server.vercel.app/review')
      .then(res => res.json())
      .then(data => setTestimonials(data))
  }, [])
  return (
    <section className='my-20'>
      <SectionTitle
        subheading={'what our client say'}
        heading={'testimonial'}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>

            <div className='my-16 mx-24 flex flex-col items-center'>
              <Rating
                style={{ maxWidth: 180 }}
                value={testimonial.rating}
                readOnly
              />
              <p className='md:flex mt-4 mb-4 text-3xl' > <FaHandPointDown></FaHandPointDown> <FaHandPointUp></FaHandPointUp></p>
              <p className='py-5'>{testimonial.details}</p>
              <h3 className="text-3xl text-orange-400">{testimonial.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;