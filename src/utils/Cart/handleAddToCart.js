import React from 'react';

const handleAddToCart = (userId, foodId) => {
    fetch("http://localhost:3000/api/v1/orders", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            item_id: foodId
        })
    })
}
export default handleAddToCart