import CartActionTypes from "./cart.action.types"

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
}) 

export default toggleCartHidden
//payload is optional property on action object