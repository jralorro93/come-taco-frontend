import React from 'react';

import ReceiptContainer from '../containers/ReceiptContainer'

export default class ShoppingCart extends React.Component {

  state = {
    shoppingCart: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/get_items", {
      headers: {
        'Authorization': `BEARER ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(parsedJSON => {
        this.setState({
          shoppingCart: parsedJSON.user.items
        })
      })
  }

  handleDelete = (foodObj) => {
    fetch('http://localhost:3000/api/v1/orders', {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `BEARER ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        food_id: foodObj.id
      })
    })
    let newShoppingCart = [...this.state.shoppingCart]
    let index = newShoppingCart.indexOf(foodObj)
    newShoppingCart.splice(index, 1)
    this.setState({
      shoppingCart: newShoppingCart
    })
  }

  render() {
    return(
      <div>
        <ReceiptContainer shoppingCart={this.state.shoppingCart} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}
