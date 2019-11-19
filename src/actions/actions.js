export const addToCart = (store, food) => {
    const newItem = store.state.shoppingList
}


// Example below:

export const addToCounter = (store, amount) => {
    const counter = store.state.counter + amount;
    store.setState({ counter });
  };