import React, { Component } from 'react';
import {unstable_Box as Box} from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class CartTotal extends Component {

  render() {
    let grandTotal = this.props.handleTaxes() + this.props.handleTotal()
    return (
      <div className='totalBox'>
      <Box>
        <p>Taxes: $ {this.props.handleTaxes().toFixed(2)}</p>
        <p>Sub Total: $ {this.props.handleTotal()}</p>
        <h2> Grand Total: $ {grandTotal.toFixed(2)}</h2>
        <br/>
        <br/>
        <Button color='primary' variant="contained" onClick={this.props.handleCheckout}>PROCEED TO CHECKOUT</Button>
      </Box>
    </div>
    )
  }
}
export default CartTotal
