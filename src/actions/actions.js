export const addToCart = (store, food) => {
    store.setState({shoppingCart: [...store.state.shoppingCart, food]})
    console.log('this is store', store.state.shoppingCart)
}

export const deleteFromCart = (store, food) => {
    console.log('hi from deleteFromCart')
}

// Example below:

export const addToCounter = (store, amount) => {
    const counter = store.state.counter + amount;
    store.setState({ counter });
  };