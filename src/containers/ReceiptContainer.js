import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';
import CartTotal from '../components/CartTotal';
import {unstable_Box as Box} from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class ReceiptContainer extends Component {

  handleTotal = () => {
    let total = 0
    for (let i = 0; i < this.props.shoppingCart.length; i++) {
      total += this.props.shoppingCart[i].price
    }
    return '$' + total
  }


  render() {
    console.log('this is props from RC: ', this.props)
    return (
      <div>
        <div className='userCart'>
          <h1>Your Cart</h1>
          <ul>
            {this.props.shoppingCart.map(food => <ItemCard food={food} handleDelete={this.props.handleDelete}/>)}
          </ul>
        </div>
        <div className='totalBox'>
          <Box>
            <h2> Grand Total: </h2>
            {this.handleTotal()}
            <br/>
            <br/>
            <Button color='primary' variant="contained" onClick={this.props.handleCheckout}>PROCEED TO CHECKOUT</Button>
          </Box>
        </div>
      </div>
    )
  }
}

export default ReceiptContainer
