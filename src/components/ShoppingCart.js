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
  
  render() {
    return(
      <div>
        <ReceiptContainer shoppingCart={this.state.shoppingCart}/>
      </div>
    )
  }
}