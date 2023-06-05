import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

const CheckOutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log('card', card)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message)
    }
    else {
      setCardError('')
      console.log('[PaymentMethod]', paymentMethod);
    }

  }
  return (
    <>
      <form className='w-2/3 ml-[25%] mt-[25%]' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-sm mt-5 lg:ml-[50%] bg-[#570DF8] border-none' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-500 lg:ml-[50%] mt-3'>{cardError}</p>}
    </>
  );
};

export default CheckOutFrom;