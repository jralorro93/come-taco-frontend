import React from 'react';

import ReceiptContainer from '../containers/ReceiptContainer'

export default class ShoppingCart extends React.Component {
  render() {
    return(
      <div>
        <ReceiptContainer shoppingCart={this.props.shoppingCart}/>
      </div>
    )
  }
}