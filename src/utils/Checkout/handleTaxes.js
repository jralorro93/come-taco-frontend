import React from 'react';

const handleTaxes = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price
    }
    let tax = total * .0875
    return tax.toFixed(2)
}
export default handleTaxes