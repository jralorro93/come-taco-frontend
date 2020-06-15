import React, { useContext, useEffect, useState } from 'react';
import {Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import CashOrCC from './CashOrCC'

import handleTotal from '../utils/Checkout/handleTotal'
import handleCheckout from '../utils/Checkout/handleCheckout'
import handleTaxes from '../utils/Checkout/handleTaxes'
import handleGrandTotal from '../utils/Checkout/handleGrandTotal'
import { UserContext } from '../App2'

const CartTotal = (props) => {
  const [ isLoaded, setIsLoaded ] = useState(false)
  const { user} = useContext(UserContext)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  console.log(user)
  return (
    <div className='totalBox'>
    <Box>
      <p>Sub Total: $ {handleTotal(user.shoppingCart)}</p>
      <p>Taxes: $ {handleTaxes(user.shoppingCart)}</p>
      <h2> Grand Total: $ {handleGrandTotal(user.shoppingCart)}</h2>
      <br/>
      <br/>
      <Button 
        color='primary' 
        variant="contained" 
        onClick={() => {
          handleCheckout(props.history)
        }}>
        PROCEED TO CHECKOUT
      </Button>
    </Box>
  </div>
  )
}

export default CartTotal
