import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, FreeMode } from "swiper";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle
      subheading={'From 11:00am to 10:00pm'}
      heading={'Order Online'}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode]}
        className="mySwiper mb-24 mt-10"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h2 className='text-white text-3xl uppercase -mt-16 text-center'>Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <h2 className='text-white text-3xl uppercase -mt-16 text-center'>Pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h2 className='text-white text-3xl uppercase -mt-16 text-center'>Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h2 className='text-white text-3xl uppercase -mt-16 text-center'>Desert</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h2 className='text-white text-3xl uppercase -mt-16 text-center'>Vegetable Salads</h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;