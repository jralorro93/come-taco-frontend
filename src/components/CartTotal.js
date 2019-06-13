import React, { Component } from 'react';

class CartTotal extends Component {

  state = {
    currentTotal: 0
  }

  handleAddTotal = ( prevPrice, newPrice) => {
    this.setState({
      currentTotal: prevPrice + newPrice
    })
  }


  render() {
    console.log('this is from CartTotal: ', this.props)
    return (
      <div>

      </div>
    )
  }
}
export default CartTotal
