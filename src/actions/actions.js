export const addToCart = (store, food) => {
    store.setState({shoppingCart: [...store.state.shoppingCart, food]})
    console.log('this is store', store)
}

export const deleteFromCart = (store, food) => {
    console.log(store)
}

// Example below:

export const addToCounter = (store, amount) => {
    const counter = store.state.counter + amount;
    store.setState({ counter });
  };