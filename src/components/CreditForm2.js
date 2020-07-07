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
    price: 2000,
    items: ['']
}

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

    const { user } = useContext(UserContext)

    // const stripeTokenHandler = (token, localStorage) => {
    //     // const paymentData = {
    //     //     token: token.id
    //     // }
    //     console.log('token', token)
    //     // console.log('paymentData', paymentData)
    //     const body = {
    //         name: 'Juan Alorro',
    //         amount: 19.20
    //     }
    //     const response = axios({
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         url: 'http://localhost:3000/api/v1/charges',
    //         body: JSON.stringify(body)
    //     })
        
    // }

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


    // THE IDEA IS TO CREATE A PAYMENT INTENT UPON MOUNT
    // THEN TO SEND A PAYMENT CONFIRMATION ON CLICK
    useEffect(()=> {
        const fetchData = async () => {
            const result = await fetch('http://localhost:3000/api/v1/secrets', {
                method: 'GET',
                authHeaders
            })
            console.log('this is the result', result)
        }

        fetchData()
    }, [])
    console.log(authHeaders)
    return (
        <form >
            <CardSection />
            <button disabled={!stripe}>Confirm Order</button>
        </form>
    )
}

export default CreditForm
// onSubmit={(e) => handleSubmit(e)}