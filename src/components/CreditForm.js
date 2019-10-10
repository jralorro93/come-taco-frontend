import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import handleGrandTotal from '../utils/Checkout/handleGrandTotal'
import handleCharge from '../utils/Checkout/handleCharge'


const style = {
    base: {
      fontSize: '16px',
      color: "#32325d",
    },
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
        handleCharge(price, userId, cart)
        let {token, error} = await this.props.stripe.createToken({name: 'Name'}) 

    }

    render() {
        console.log('this is props from CreditForm', this.props)
        let grandTotal = handleGrandTotal(this.props.shoppingCart)
        return (
            <form id='ccForm' onSubmit={(e) => this.submit(e, grandTotal, this.props.currentUser.user.id , this.props.shoppingCart)}>
                <CardElement />
                <button>Submit</button>
            </form>

        )
    }
}
export default injectStripe(CreditForm)

// (e) => this.handleSubmit(e, grandTotal, this.props.currentUser.user.id, this.props.shoppingCart)