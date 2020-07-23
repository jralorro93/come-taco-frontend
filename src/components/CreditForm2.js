import React, { useContext, useState, useEffect } from 'react'

import { Button, CardActionArea } from '@material-ui/core'
import axios from 'axios'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import CardSection from './CardSection'
import stripeTokenHandler from '../utils/Checkout/stripeTokenHandler'
import {handleGrandTotal, handlePayment} from '../utils/Checkout/handleGrandTotal'
import { UserContext } from '../App2'
import { regHeaders, authHeaders } from '../utils/headers'


const info = {
    user_id: 1,
    amount: 2000,
    items: ['']
}

const CreditForm = () => {
    const [values, setValues] = useState({
        succeeded: '',
        error: '',
        processing: '',
        disabled: true,
        clientSecret: ''
    })
    const stripe = useStripe()
    const elements = useElements()

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
                billing_details: {
                    name: `${user.user.first_name} ${user.user.last_name}`
                }
            }    
        })

        if (result.error) console.log(result.error.message)
        else {
            if(result.paymentIntent.status === 'succeeded') {
                console.log('it works')
            }
        }



    }

console.log(user.user)
    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            <CardSection />
            <button disabled={!stripe}>Confirm Order</button>
        </form>
    )
}

export default CreditForm
// 