import React, { useContext, useState, useEffect } from 'react'

import { CardExpiryElement, CardNumberElement, CardCvcElement, injectStripe } from 'react-stripe-elements';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import handleGrandTotal from '../utils/Checkout/handleGrandTotal'
import handlePayment from '../utils/Checkout/handlePayment'
import { UserContext } from '../App2'

const useStyles = makeStyles(theme => ({
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
}))

const CreditForm = ({stripe}) => {
    const { user } = useContext(UserContext)
    // Doesn't work??????
    const classes = useStyles()

    
    const [ values , setValues ] = useState([])

    const submit = async (e, price, userId, cart) => {
        e.preventDefault()

        //Handles Payment history
        handlePayment(price, userId, cart)

        // Handles payment charge via Stripe
        let {token, error} = await stripe.createToken({name: `${user.user.first_name} ${user.user.last_name}`}) 
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
    
    return (
        <div id='creaditFormBox'>
            <h3>Enter Credit Info Below:</h3>
            <form id='ccForm' onSubmit={(e) => submit(e, handleGrandTotal, user.user.id , user.shoppingCart)}>
                <label>
                    Card Number
                    <CardNumberElement 
                        onReady={(el) => el.focus()} 
                        className={classes.base}
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
                        className={classes.base}
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
                <Button variant='contained' color='primary' className={classes.button}>Confirm</Button>
            </form>
        </div>
    )
}

export default injectStripe(CreditForm)