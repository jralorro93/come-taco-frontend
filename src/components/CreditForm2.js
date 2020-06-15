import React, { useContext, useState, useEffect } from 'react'

import { CardExpiryElement, CardNumberElement, CardCvcElement, injectStripe } from 'react-stripe-elements';
import { Button } from '@material-ui/core'

import handleGrandTotal from '../utils/Checkout/handleGrandTotal'
import handlePayment from '../utils/Checkout/handlePayment'
import { UserContext } from '../App2'

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

const CreditForm = () => {
    const { user } = useContext(UserContext)
// ON LINE 29 onSubmit={(e) => this.submit(e, grandTotal, this.props.currentUser.user.id , this.props.shoppingCart)}

    const [ values , setValues ] = useState([])

    return (
        <div id='creaditFormBox'>
            <h3>Enter Credit Info Below:</h3>
            <form id='ccForm' >
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

export default injectStripe(CreditForm)