import React, { useState, useEffect } from 'react';
import {unstable_Box as Box} from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useTotal from '../utils/Checkout/useTotal'
import handleCheckout from '../utils/Checkout/handleCheckout'

const CartTotal = (props) => {
  // let [grandTotal, setGrandTotal] = useState(props.grandTotal)
  // useEffect(() => {
  //   setGrandTotal(props.handleTaxes() + props.handleTotal())
  // })


  console.log('this is grandTotal props from CartTotal:', props)
  let grandTotal = props.handleTaxes() + props.handleTotal()
  return (
    <div className='totalBox'>
    <Box>
      <p>Sub Total: $ {props.handleTotal()}</p>
      <p>Taxes: $ {props.handleTaxes().toFixed(2)}</p>
      <h2> Grand Total: $ {grandTotal.toFixed(2)}</h2>
      <br/>
      <br/>
      <Button color='primary' variant="contained" onClick={props.handleCheckout}>PROCEED TO CHECKOUT</Button>
    </Box>
  </div>
  )
}

export default CartTotal
