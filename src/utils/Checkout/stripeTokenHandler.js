import axios from 'axios'

const stripeTokenHandler = async (token, localStorage) => {
    const paymentData = {token: token.id}
    console.log('token', token)
    console.log('paymentData', paymentData)

    const response = await fetch('http://localhost:3000/api/v1/charges', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(paymentData)
    })
    .then(res => {
        console.log('hi from res', res)
        res.json()
    })
    

}

export default stripeTokenHandler