import React from 'react';
import ItemCard from '../components/ItemCard';
import CartTotal from '../components/CartTotal';


class ReceiptContainer extends React.PureComponent {


  render() {
    return (
      <div>
        <div className='userCart'>
          <h1>Your Cart</h1>
          <ul>
            {this.props.shoppingCart.map(food => <ItemCard food={food} user={this.props.user} handleDelete={this.props.handleDelete}/>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default ReceiptContainer
