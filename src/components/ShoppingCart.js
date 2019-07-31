import React from 'react';

import ReceiptContainer from '../containers/ReceiptContainer'
import CartTotal from './CartTotal'

const ShoppingCart = (props) => {
  
    return (
      <div className='ShoppingCartPage'>
        <ReceiptContainer shoppingCart={props.shoppingCart} user={props.currentUser} handleDelete={props.handleDelete}/>
        <CartTotal  shoppingCart={props.shoppingCart}  handleCheckout={props.handleCheckout} handleTotal={props.handleTotal} handleTaxes={props.handleTaxes}/>
      </div>
    )
}

export default ShoppingCart
