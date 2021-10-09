const INITIAL_STATE = {
    cartProduct: null
}

const cartItemReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'ADD_PRODUCT_CART':
            return {
                ...state,
                cartProduct: action.payload
            }
        default:
            return state
    }
} 

export default cartItemReducer