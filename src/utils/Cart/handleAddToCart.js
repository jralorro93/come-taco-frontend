const handleAddToCart = (userId, food, dispatch) => {
    fetch("http://localhost:3000/api/v1/orders", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            item_id: food.id
        })
    })
        .then(res => {
            dispatch({type: 'ADD_ITEM', payload: food})
        })
}
export default handleAddToCart
