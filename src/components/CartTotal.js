import React, { Component } from 'react';

class CartTotal extends Component {

  render() {
    let currentTotal = 0
    // const itemTotal = this.props.foodPrice.forEach(food => food.price )
    console.log('this is from CartTotal: ', this.props)
    return (
      <div>
        <h2>Grand Total:</h2>
        {this.props.foods.each(food =>  currentTotal + food.price)}
      </div>
    )
  }
}
export default CartTotal
