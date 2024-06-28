import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Fetured from '../Fetured/Fetured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';
import CallUs from '../../CallUs/CallUs';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Chines Food Restaurant | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Fetured></Fetured>
      <CallUs></CallUs>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;