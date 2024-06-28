import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import UseMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
  const [menu] = UseMenu()
  const desserts = menu.filter(item=> item.category === 'dessert')
  const soup = menu.filter(item=> item.category === 'soup')
  const pizza = menu.filter(item=> item.category === 'pizza')
  const salad = menu.filter(item=> item.category === 'salad')
  const offered = menu.filter(item=> item.category === 'offered')

  return (
    <div>
      <Helmet>
        <title>Chines Food Restaurant | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'Our Menu'}></Cover>
      {/* main cover */}
      <SectionTitle subheading={"Don't Miss"} heading={"today's offer"}></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu items */}
      <MenuCategory
       items={desserts}
       title={'Dessert'}
       img={dessertImg}
      ></MenuCategory>

      {/* Pizza menu items */}
      <MenuCategory
       items={pizza}
       title={'Pizza'}
       img={pizzaImg}
      ></MenuCategory>

      {/* Soup menu items */}
      <MenuCategory
       items={soup}
       title={'Soup'}
       img={soupImg}
      ></MenuCategory>

      {/* Soup menu items */}
      <MenuCategory
       items={salad}
       title={'Salad'}
       img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;