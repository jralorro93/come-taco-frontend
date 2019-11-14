import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ReceiptContainer2 = (props) => {
    const [ shoppingCart, setShoppingCart ] = useState([props.shoppingCart])
    
    useEffect(() => {
        const getFood = async () => {
            const result = await axios('http://localhost:3000/api/v1/get_items')
            debugger
        }
        getFood()

    }, [shoppingCart])

    return (
        <h2>Hi</h2>
    )
}
export default ReceiptContainer2

//add an a conditional statement for having/not having anything in the cart