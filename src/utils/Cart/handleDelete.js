import axios from 'axios'

const handleDelete = (id, foodObj, localStorage, shoppingCart, setShoppingCart) => {
    axios({
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `BEARER ${localStorage.getItem('token')}`
        },
        url: `http://localhost:3000/api/v1/orders/${id}`,
        data: foodObj
    })
        .then(res => {
            let newShoppingCart = [...shoppingCart]
            let index = newShoppingCart.indexOf(foodObj)
            newShoppingCart.splice(index, 1)
            setShoppingCart(newShoppingCart)
        })
        .catch(err => console.log('Error ', err))
}

export default handleDelete