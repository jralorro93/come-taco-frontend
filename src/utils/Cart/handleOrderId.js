const handleOrderId = (foodId, orders) => {
    const findIt = orders.find(order => order.item_id === foodId)
    return findIt.id
}
export default handleOrderId