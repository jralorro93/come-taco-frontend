import axios from 'axios'

const stripeTokenHandler = (token, localStorage) => {
    const paymentData = {token: token.id}
    console.log('token', token)
    console.log('paymentData', paymentData)

    const response = axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        url: 'http://localhost:3000/api/v1/charges',
        body: JSON.stringify(paymentData)
    })
    console.log('this is response', response)
}

export default stripeTokenHandler