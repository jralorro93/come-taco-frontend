const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_USER':
            return console.log('this is action.payload', action.payload)
        case 'ADD_ITEM':
            return console.log('this is state')
        case 'CONSOLE_LOG': 
            return console.log('did this work?')
        default:
            return state
    }
}
export default reducer