import React from 'react'
import {CardElement, CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js'

 const CardSection = () => {
  return (
    <div >
      <label>
          Card details
          <CardNumberElement />
          <CardExpiryElement />
          <CardCvcElement />
        </label>
      </div>
  );
};
export default CardSection

