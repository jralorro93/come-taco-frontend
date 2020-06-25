import axios from 'axios'

const stripeTokenHandler = async (token, localStorage) => {
    // const paymentData = {token: token.id}
    const body = {
        name: 'Juan Alorro',
        amount: 19.20
    }
    console.log('token', token)
    // console.log('paymentData', paymentData)

    const response = await fetch('http://localhost:3000/api/v1/charges', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => {
        console.log('hi from res', res)
        res.json()
    })
    

}

export default stripeTokenHandler