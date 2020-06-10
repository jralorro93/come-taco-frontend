const handleOrderId = (foodId, orders) => {
    const findIt = orders.find(order => order.food_id === foodId)
    console.log('this is findIt', findIt)
}
export default handleOrderId