import React, { Component } from 'react';
import CreditInfo from './CreditInfo'
import CashOrCC from './CashOrCC'
import CashCheckout from './CashCheckout'

class Checkout extends Component {

  state = {
    paymentOption: '',
    activePage: 'CashOrCC'
  }

  handleChoice = (e) => {
    this.setState({
      [e.target.name]: e.target.value
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
        currentView = <CashCheckout/>
        break;
      case('CC'):
        currentView = <CreditInfo/>
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
