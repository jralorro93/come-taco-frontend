import React, { useContext, useState, useEffect } from 'react'

import { Button, CardActionArea } from '@material-ui/core'
import axios from 'axios'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import CardSection from './CardSection'
import stripeTokenHandler from '../utils/Checkout/stripeTokenHandler'
import {handleGrandTotal, handlePayment} from '../utils/Checkout/handleGrandTotal'
import { UserContext } from '../App2'
import { regHeaders, authHeaders } from '../utils/headers'

const Field = ({
    label,
    id,
    type,
    placeholder,
    required,
    autoComplete,
    value,
    onChange,
  }) => (
    <div className="FormRow">
      <label htmlFor={id} className="FormRowLabel">
        {label}
      </label>
      <input
        className="FormRowInput"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );

const CreditForm = () => {
    const [values, setValues] = useState({
        succeeded: '',
        error: '',
        processing: '',
        disabled: true,
        clientSecret: ''
    })
   
    const [billingDetails, setBillingDetails] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const stripe = useStripe()
    const elements = useElements()

    const thisIsCard = elements.getElement(CardElement)

    const { user } = useContext(UserContext)

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/v1/secrets', {
                method: 'GET',
                headers: authHeaders
            })
            const {client_secret: clientSecret} = await response.json()
            setValues({...values, clientSecret})
        }

        fetchData()
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmCardPayment(values.clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: values.billingDetails
            }    
        })

        if (result.error) console.log(result.error.message)
        else {
            if(result.paymentIntent.status === 'succeeded') {
                console.log('it works')
            }
        }



    }

console.log(elements)
console.log('this is CardElement', thisIsCard)
    return (
        <form className="Form" onSubmit={(e) => handleSubmit(e)} >
            <fieldset>
                <Field
                    label="Name"
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                    autoComplete="name"
                    value={billingDetails.name}
                    onChange={(e) => {
                        setBillingDetails({...billingDetails, name: e.target.value})
                    }}
                />
                <Field
                    label="Email"
                    id="email"
                    type="text"
                    placeholder="JaneDoe@gmail.com"
                    required
                    autoComplete="email"
                    value={billingDetails.name}
                    onChange={(e) => {
                        setBillingDetails({...billingDetails, email: e.target.value})
                    }}
                />
                <Field
                    label="Mobile"
                    id="phone"
                    type="text"
                    placeholder="555-555-5555"
                    required
                    autoComplete="tel"
                    value={billingDetails.name}
                    // Place Regex Here to remove any () or - 
                    onChange={(e) => {
                        setBillingDetails({...billingDetails, phone: e.target.value})
                    }}
                />
                    
                
            </fieldset>
            <CardSection />
            <button disabled={!stripe}>Confirm Order</button>
        </form>
    )
}

export default CreditForm