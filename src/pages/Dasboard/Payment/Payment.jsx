import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutFrom from './CheckOutFrom';
import UseCart from '../../../Hooks/UseCart';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY)

const Payment = () => {
  const [cart] = UseCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2))
  return (
    <div>
      <SectionTitle subheading={"Please Process"} heading={"Payment"}></SectionTitle>
      <Elements stripe={stripePromise}>
         <CheckOutFrom cart={cart} price={price}></CheckOutFrom>
    </Elements>
    </div>
  );
};

export default Payment;