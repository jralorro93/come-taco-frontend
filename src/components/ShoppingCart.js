import React from 'react';

import ReceiptContainer from '../containers/ReceiptContainer'

const ShoppingCart = (props) => {
  console.log('this is props from SC: ', props)
    return (
      <div className='ShoppingCardPage'>
        <ReceiptContainer shoppingCart={props.shoppingCart} user={props.currentUser}  handleDelete={props.handleDelete} handleCheckout={props.handleCheckout}/>
      </div>
    )
}

export default ShoppingCart
