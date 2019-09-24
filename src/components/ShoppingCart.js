import React, {useState} from 'react';

import ReceiptContainer from '../containers/ReceiptContainer'
import CartTotal from './CartTotal'


// We are trying to refactor hooks into our code to grab our
// total from the shopping cart.

const ShoppingCart = (props) => {
    return (
      <div className='ShoppingCartPage'>
        <ReceiptContainer shoppingCart={props.shoppingCart} user={props.currentUser} handleDelete={props.handleDelete}/>
        <CartTotal  shoppingCart={props.shoppingCart} handleTaxes={props.handleTaxes} handleGrandTotal={props.handleGrandTotal} grandTotal={props.grandTotal} history={props.history}/>
      </div>
    )
}

export default ShoppingCart
