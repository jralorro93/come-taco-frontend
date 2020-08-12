import React, { useContext, useState, useEffect } from 'react'

import { Button, CardActionArea, FormGroup } from '@material-ui/core'
import axios from 'axios'
import { useStripe, useElements, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

import CardSection from './CardSection'
import {handleGrandTotal, handlePayment} from '../utils/Checkout/handleGrandTotal'
import { UserContext } from '../App2'
import { regHeaders, authHeaders } from '../utils/headers'
import Field from '../utils/CustomHooks/useField'
// const Field = ({
//     label,  
//     id,
//     type,
//     name,
//     placeholder,
//     required,
//     value,
//     onChange
// }) => (
//     <div className='FormRow'>
//         <label className='FormRowLabel' htmlFor={id}>
//             {label}
//         </label>
//         <input
//             className='FormRowInput'
//             id={id}
//             type={type}
//             name={name}
//             placeholder={placeholder}
//             required={required}
//             value={value}
//             onChange={onChange}
//         />
//     </div>
// );

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

    const handleChange = e => {
        const {id, value, name} = e.target
        setBillingDetails({...billingDetails, [id]: value})
        console.log('this is e', billingDetails)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmCardPayment(values.clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: billingDetails
            }    
        })

        if (result.error) console.log(result.error.message)
        else {
            if(result.paymentIntent.status === 'succeeded') {
                console.log('it works')
            }
        }



    }

    return (
        <form className="Form" onSubmit={(e) => handleSubmit(e)} >
            <fieldset className='FormGroup'>
                <Field
                    label="Name"
                    id="name"
                    type="text"
                    name='name'
                    placeholder="Jane Doe"
                    required
                    value={billingDetails.name}
                    onChange={(e) => handleChange(e)}
                />
                <Field
                    label="Email"
                    id="email"
                    type="text"
                    name='email'
                    placeholder="JaneDoe@gmail.com"
                    required
                    value={billingDetails.email}
                    onChange={(e) => {
                        setBillingDetails({...billingDetails, email: e.target.value})
                    }}
                />
                <Field
                    label="Mobile"
                    id="phone"
                    type="text"
                    name='phone'
                    placeholder="555-555-5555"
                    required
                    value={billingDetails.phone}
                    // Place Regex Here to remove any () or - 
                    onChange={(e) => {
                        setBillingDetails({...billingDetails, phone: e.target.value})
                    }}
                />
            </fieldset>
            <fieldset className='FormGroup'>
                <CardSection />
            </fieldset>
            <button disabled={!stripe}>Confirm Order</button>
        </form>
    )
}

export default CreditForm