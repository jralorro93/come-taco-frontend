import React, {useState} from 'react';

import ReceiptContainer from '../containers/ReceiptContainer'
import CartTotal from './CartTotal'
import CreditCheckoutContainer from '../containers/CreditCheckoutContainer'

const ShoppingCart = (props) => {

    return (
      <div className='ShoppingCartPage'>
        <ReceiptContainer />
        <CreditCheckoutContainer />
        {/* <CartTotal  shoppingCart={props.shoppingCart} history={props.history}/> */}
      </div>
    )
}

export default ShoppingCart
