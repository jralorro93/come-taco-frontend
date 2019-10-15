import React from 'react'

const handlePayment = (price, userId, cart) => {
    return fetch('http://localhost:3000/api/v1/payments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            user_id: userId,
            price: price,
            items: cart
        })
    }).then(res => res.json())
}

export default handlePayment