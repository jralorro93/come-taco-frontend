import React from 'react'
import {CardElement} from '@stripe/react-stripe-js'

 const CardSection = () => {
  return (
    <label>
      Card details
      <CardElement/>
    </label>
  );
};
export default CardSection

