import React, { useState, useEffect } from 'react';
import {unstable_Box as Box} from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import CashOrCC from './CashOrCC'

import handleTotal from '../utils/Checkout/handleTotal'
import handleCheckout from '../utils/Checkout/handleCheckout'
import handleTaxes from '../utils/Checkout/handleTaxes'
import handleGrandTotal from '../utils/Checkout/handleGrandTotal'

const CartTotal = (props) => {
    return (
      <div className='totalBox'>
      <Box>
        <p>Sub Total: $ {handleTotal(props.shoppingCart)}</p>
        <p>Taxes: $ {handleTaxes(props.shoppingCart)}</p>
        <h2> Grand Total: $ {handleGrandTotal(props.shoppingCart)}</h2>
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
