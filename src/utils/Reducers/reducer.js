const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT_USER':
            return {
                user: {},
                shoppingCart: []
            }
        case 'GET_ITEMS':
            return {
                ...state,
                shoppingCart: action.payload   
            }
        case 'ADD_ITEM':
            return {
                ...state,
                shoppingCart: [ ...state.shoppingCart, action.payload]
            }
        case 'CONSOLE_LOG': 
            return console.log('did this work?')
        default:
            return state
    }
}
export default reducer

// LOG OUT DOESN'T REMOVE localStorage TOKEN