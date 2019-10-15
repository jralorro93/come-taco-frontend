import React, {Component} from 'react';
import {CardElement, CardExpiryElement, CardNumberElement, CardCvcElement, injectStripe} from 'react-stripe-elements';
import handleGrandTotal from '../utils/Checkout/handleGrandTotal'
import handlePayment from '../utils/Checkout/handlePayment'


var style = {
    base: {
      color: '#32325d',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      },
      ':-webkit-autofill': {
        color: '#32325d',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
      ':-webkit-autofill': {
        color: '#fa755a',
      },
    }
  };

class CreditForm extends Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async submit(e, price, userId, cart) {
        e.preventDefault()

        //Handles payment history
        handlePayment(price, userId, cart)

        //Handles payment charge via Stripe
        let {token, error} = await this.props.stripe.createToken({name: `${this.props.currentUser.firstName} ${this.props.currentUser.lastName}`}) 
        let charge = {
            amount: price * 100,
            currency: 'usd',
            token: token.id
        }

        if (token.error) {
            return token.error
        }

        let response = await fetch('http://localhost:3000/api/v1/charges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({charge: charge})
        })
    }

    render() {
        console.log('this is props from CreditForm', this.props)
        let grandTotal = handleGrandTotal(this.props.shoppingCart)
        return (
            <form id='ccForm' onSubmit={(e) => this.submit(e, grandTotal, this.props.currentUser.user.id , this.props.shoppingCart)}>
                <CardNumberElement onReady={(el) => el.focus()} style={{base: {fontSize: '18px'}}}/>
                <CardCvcElement style={{base: {fontSize: '18px'}}}/>
                <CardExpiryElement style={{base: {fontSize: '18px'}}}/>
                <button>Submit</button>
            </form>

        )
    }
}
export default injectStripe(CreditForm)

// (e) => this.handleSubmit(e, grandTotal, this.props.currentUser.user.id, this.props.shoppingCart)