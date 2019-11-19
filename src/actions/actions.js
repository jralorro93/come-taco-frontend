export const addToCart = (store, food) => {
    // store.state.shoppingCart.push(food)

    store.setState({shoppingCart: [...store.state.shoppingCart, food]})
    console.log('this is store', store.state.shoppingCart)
}


// Example below:

export const addToCounter = (store, amount) => {
    const counter = store.state.counter + amount;
    store.setState({ counter });
  };