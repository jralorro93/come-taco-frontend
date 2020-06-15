import React, {useState} from 'react';

import ReceiptContainer from '../containers/ReceiptContainer'
import CartTotal from './CartTotal'

const ShoppingCart = (props) => {

    return (
      <div className='ShoppingCartPage'>
        <ReceiptContainer />
        <CartTotal  shoppingCart={props.shoppingCart} history={props.history}/>
      </div>
    )
}

export default ShoppingCart
