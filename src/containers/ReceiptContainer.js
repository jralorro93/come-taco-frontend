import React, { Component } from 'react'
import ItemCard from '../components/ItemCard'

const ReceiptContainer = (props) => {
  return (
    <div>
      <h1>Your Wishlist</h1>
      <ul>
        {props.shoppingCart.map(food => <ItemCard food={food}/>)}
      </ul>
    </div>
  )
}

export default ReceiptContainer;