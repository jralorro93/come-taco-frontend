import React, { Component } from 'react'
import ItemCard from '../components/ItemCard'

const ReceiptContainer = (props) => {
  return (
    <div>
      <h1>Your Wishlist</h1>
      <ol>
        {props.shoppingCart.map(food => <ItemCard food={food}/>)}
      </ol>
    </div>
  )
}

export default ReceiptContainer;