import React, {useState} from 'react';

import ReceiptContainer from '../containers/ReceiptContainer'
import CartTotal from './CartTotal'

const ShoppingCart = (props) => {
    return (
      <div className='ShoppingCartPage'>
        <ReceiptContainer shoppingCart={props.shoppingCart} user={props.currentUser} handleDelete={props.handleDelete}/>
        <CartTotal  shoppingCart={props.shoppingCart} history={props.history}/>
      </div>
    )
}

export default ShoppingCart
