import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';
import CartTotal from '../components/CartTotal';

const ReceiptContainer = props => {
  return (
    <div className='userCart'>
      <div>
        <h1>Your Cart</h1>
        <ul>
          {props.shoppingCart.map(food => <ItemCard food={food} handleDelete={props.handleDelete}/>)}
        </ul>
      </div>
      <div className='userTotalCart'>
        <h2>Total: </h2>
          <CartTotal foodPrice={props.shoppingCart}/>
      </div>
    </div>
  )
}

export default ReceiptContainer;
