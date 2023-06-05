import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutFrom from './CheckOutFrom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY)

const Payment = () => {
  return (
    <div>
      <SectionTitle subheading={"Please Process"} heading={"Payment"}></SectionTitle>
      <Elements stripe={stripePromise}>
         <CheckOutFrom/>
    </Elements>
    </div>
  );
};

export default Payment;