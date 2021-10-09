import { combineReducers } from "redux";//combine all reducers
import userReducer from "./user/user.reducer";
import cartItemReducer from "./cart-item/cart-item.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    user: userReducer,
    cartItem: cartItemReducer,
    cart: cartReducer
})