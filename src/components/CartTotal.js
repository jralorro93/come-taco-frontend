import React, { Component } from 'react';
import {unstable_Box as Box} from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class CartTotal extends Component {

  render() {
    this.props.handleGrandTotal()
    return (
      <div className='totalBox'>
      <Box>
        <p>Taxes: $ {this.props.handleTaxes().toFixed(2)}</p>
        <p>Sub Total: $ {this.props.handleTotal()}</p>
        <h2> Grand Total: $ {this.props.grandTotal}</h2>
        <br/>
        <br/>
        <Button color='primary' variant="contained" onClick={this.props.handleCheckout}>PROCEED TO CHECKOUT</Button>
      </Box>
    </div>
    )
  }
}
export default CartTotal
