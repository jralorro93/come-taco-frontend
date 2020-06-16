import React, { useContext, useState, useEffect } from 'react'

import { Button, CardActionArea } from '@material-ui/core'

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

import CardSection from './CardSection'
import stripeTokenHandler from '../utils/Checkout/stripeTokenHandler'
import handleGrandTotal from '../utils/Checkout/handleGrandTotal'
import handlePayment from '../utils/Checkout/handlePayment'
import { UserContext } from '../App2'


const CreditForm = () => {
    // CREATE PAYMENT THEN CHARGE CHECK FIRST TIME
    // MAYBE???
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        const result = await stripe.createToken(card)

        if(result.error) {
            console.log('hi this is error')
            console.log(result.error.message)
        } else {
            stripeTokenHandler(result.token, localStorage)
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <CardSection />
            <button disabled={!stripe}>Confirm Order</button>
        </form>
    )
}

export default CreditForm