import React, { useContext, useState, useEffect } from 'react'

import { Button, CardActionArea } from '@material-ui/core'
import axios from 'axios'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import CardSection from './CardSection'
import stripeTokenHandler from '../utils/Checkout/stripeTokenHandler'
import handleGrandTotal from '../utils/Checkout/handleGrandTotal'
import handlePayment from '../utils/Checkout/handlePayment'
import { UserContext } from '../App2'
import { regHeaders } from '../utils/headers'


const CreditForm = () => {
    // CREATE PAYMENT THEN CHARGE CHECK FIRST TIME
    // MAYBE???
    const [values, setValues] = useState({
        succeeded: '',
        error: '',
        processing: '',
        disabled: true,
        clientSecret: ''
    })
    const stripe = useStripe()
    const elements = useElements()

    const stripeTokenHandler = (token, localStorage) => {
        // const paymentData = {
        //     token: token.id
        // }
        console.log('token', token)
        // console.log('paymentData', paymentData)
        const body = {
            name: 'Juan Alorro',
            amount: 19.20
        }
        const response = axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            url: 'http://localhost:3000/api/v1/charges',
            body: JSON.stringify(body)
        })
        
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     if (!stripe || !elements) {
    //         return;
    //     }

    //     const card = elements.getElement(CardElement)
    //     const {error, paymentMethod} = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card
    //     }) 
    //     if(error) {
    //         console.log('hi this is error')
    //         console.log(error.message)
    //     } else {
    //         stripeTokenHandler(paymentMethod, localStorage)
    //     }
    // }
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const data = {
    //         name: 'Juan Alorro',
    //         amount: 19.20
    //     }
    //     const result = await axios({
    //         method: 'POST',
    //         regHeaders,
    //         url: 'http://localhost:3000/api/v1/charges',
    //         body: JSON.stringify(data)
    //     })
    //     console.log(result)
        
    // }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <CardSection />
            <button disabled={!stripe}>Confirm Order</button>
        </form>
    )
}

export default CreditForm