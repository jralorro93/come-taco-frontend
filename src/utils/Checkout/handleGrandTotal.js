import React from 'react'
import handleTaxes from './handleTaxes'
import handleTotal from './handleTotal'

const handleGrandTotal = (cart) => {
    let grandTotal = parseFloat(handleTaxes(cart)) + parseFloat(handleTotal(cart))
    return grandTotal
}

export default handleGrandTotal