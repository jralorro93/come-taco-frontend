import React, { Component } from 'react';
import {unstable_Box as Box} from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class CartTotal extends Component {
  render() {
    console.log('this is props from CT: ', this.props)
    return (
      <div className='totalBox'>
      <Box>
        <h2> Grand Total: </h2>
        {this.props.handleTotal()}
        <br/>
        <br/>
        <Button color='primary' variant="contained" onClick={this.props.handleCheckout}>PROCEED TO CHECKOUT</Button>
      </Box>
    </div>
    )
  }
}
export default CartTotal
