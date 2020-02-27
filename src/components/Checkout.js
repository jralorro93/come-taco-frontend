import React, { Component } from 'react';
import CreditCheckoutContainer from '../containers/CreditCheckoutContainer'
import CashOrCC from './CashOrCC'
import CashCheckoutContainer from '../containers/CashCheckoutContainer'

class Checkout extends Component {

  state = {
    paymentOption: '',
    activePage: 'CashOrCC'
  }

  handleChoice = (e) => {
    this.setState({
      paymentOption: e.target.value
    })
  }

  handleActivePage = (e) => {
    e.preventDefault()
    this.state.paymentOption === 'Card' ? this.setState({activePage: 'CC'}) : this.setState({activePage: 'Cash'})
  }

  render() {
    // We want to render Cash or Card first, then change view depending on choice
    let currentView = null;
    switch(this.state.activePage) {
      case('CashOrCC'): 
        currentView = <CashOrCC paymentOption={this.state.paymentOption} handleChoice={this.handleChoice} handleActivePage={this.handleActivePage}/>
        break;
      case('Cash'):
        currentView = <CashCheckoutContainer/>
        break;
      case('CC'):
        currentView = <CreditCheckoutContainer shoppingCart={this.props.shoppingCart} currentUser={this.props.currentUser}/>
        break;
    }

    return (
      <div>
        {currentView}
      </div>
    )
  }
}

export default Checkout
