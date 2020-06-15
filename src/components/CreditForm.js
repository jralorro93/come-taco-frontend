import React, {Component} from 'react';
import {CardExpiryElement, CardNumberElement, CardCvcElement, injectStripe} from 'react-stripe-elements';
import handleGrandTotal from '../utils/Checkout/handleGrandTotal'
import handlePayment from '../utils/Checkout/handlePayment'
import {Button} from '@material-ui/core'

let style = {
    base: {
      color: 'black',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontSize: '16px',
      padding: '10px',
      textShadow: '2px'
    },
    button: {
        marginTop: '10px'
    }
  };

class CreditForm extends Component {


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
        let grandTotal = handleGrandTotal(this.props.shoppingCart)
        console.log('this is style',style.base)
        return (
            <div id='creditFormBox'>
                <h3>Enter Credit Info Below:</h3>
                <form id='ccForm' onSubmit={(e) => this.submit(e, grandTotal, this.props.currentUser.user.id , this.props.shoppingCart)}>
                    <label>
                        Card Number
                        <CardNumberElement 
                            onReady={(el) => el.focus()} 
                            style={style.base}
                        />
                    </label>
                    <label>
                        CVC Number
                        <CardCvcElement 
                            style={{padding: "30px"}}
                            
                        />
                    </label>
                    <label>
                        Expiration Date
                        <CardExpiryElement 
                            style={style.base}
                            
                        /> 
                    </label>
                    <label>
                       Postal Code
                       <br/>
                        <input  
                            type='text' 
                            placeholder='11357'
                            className='StripeElement'
                            required
                        />
                    </label>
                    <br/>
                    <Button variant='contained' color='primary' style={style.button}>Confirm</Button>
                </form>
            </div>

        )
    }
}
export default injectStripe(CreditForm)

