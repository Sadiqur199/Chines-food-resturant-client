import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import FoodCart from '../../../Component/FoodCart/FoodCart';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
  // const categories = ['salad','pizza','soup','dessert','drinks']
  // const {category} = useParams()
  // const initialIndex = categories.indexOf(category)
  // const [tabIndex,setTabIndex] = useState(initialIndex)
  const [menu] = UseMenu()
  // console.log(category)
  const desserts = menu.filter(item=> item.category === 'dessert')
  const soup = menu.filter(item=> item.category === 'soup')
  const pizza = menu.filter(item=> item.category === 'pizza')
  const salad = menu.filter(item=> item.category === 'salad')
  const drinks = menu.filter(item=> item.category === 'drinks')

  return (
    <div className='px-5'>
      <Helmet>
        <title>Chines Food Restaurant | Order</title>
      </Helmet>
      <Cover img={orderImg} title={'Order Food'}></Cover>

      <Tabs className='text-center mt-5 mb-10'>
      {/* defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} */}
        <TabList className='text-orange-500'>
          {/* <Tab>All Food</Tab> */}
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
         <OrderTab items={salad}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={pizza}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={desserts}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;