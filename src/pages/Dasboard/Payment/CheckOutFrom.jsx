import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import UseAuth from '../../../Hooks/UseAuth';

const CheckOutFrom = ({cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = UseAuth();
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');




  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
  }, [price, axiosSecure])

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

    setProcessing(true)


    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );


    if (confirmError) {
      console.log(confirmError);
    }

    console.log(paymentIntent)

    setProcessing(false)

    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map(item => item._id),
        menuItems: cart.map(item => item._id),
        status: 'service pending',
        itemNames: cart.map(item => item.name)
      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          console.log(res.data);
          if (res.data.result.insertedId) {
            // display confirm
          }
        })
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
        <button className='btn btn-sm mt-5 lg:ml-[50%] bg-[#570DF8] border-none' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-500 lg:ml-[50%] mt-3'>{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckOutFrom;