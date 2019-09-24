import React, { useState, useEffect } from 'react';
import {unstable_Box as Box} from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import handleTotal from '../utils/Checkout/handleTotal'
import handleCheckout from '../utils/Checkout/handleCheckout'
import handleTaxes from '../utils/Checkout/handleTaxes'
import handleGrandTotal from '../utils/Checkout/handleGrandTotal'

const CartTotal = (props) => {
  // let [grandTotal, setGrandTotal] = useState(props.grandTotal)
  // useEffect(() => {
  //   setGrandTotal(props.handleTaxes() + props.handleTotal())
  // })


  console.log('this is grandTotal props from CartTotal:', props)
  // let grandTotal = props.handleTaxes() + props.handleTotal()
  return (
    <div className='totalBox'>
    <Box>
      <p>Sub Total: $ {handleTotal(props.shoppingCart)}</p>
      <p>Taxes: $ {handleTaxes(props.shoppingCart)}</p>
      <h2> Grand Total: $ {handleGrandTotal(props.shoppingCart)}</h2>
      <br/>
      <br/>
      <Button color='primary' variant="contained" onClick={() => handleCheckout(props.history)}>PROCEED TO CHECKOUT</Button>
    </Box>
  </div>
  )
}

export default CartTotal
