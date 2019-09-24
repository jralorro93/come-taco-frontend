import React from 'react'

const handleTotal = (cart) => {
    let total = 0
    for ( let i = 0; i < cart.length; i++) {
        total += cart[i].price
    }
    return total
}

export default handleTotal