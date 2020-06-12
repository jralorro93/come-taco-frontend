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
                user: {}
            }
        case 'GET_ITEMS':
            return {
                ...state,
                shoppingCart: action.payload   
            }
        case 'ADD_ITEM':
            return console.log('this is state')
        case 'CONSOLE_LOG': 
            return console.log('did this work?')
        default:
            return state
    }
}
export default reducer

// LOG OUT DOESN'T REMOVE localStorage TOKEN