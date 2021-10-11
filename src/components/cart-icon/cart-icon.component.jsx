import React from "react";
import {ReactComponent as Cart} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
import { connect } from "react-redux";
import  { toggleCartHidden }  from '../../redux/cart/cart.action'

const CartIcon = (props) => {
    console.log(props)
    const {toggleCartHidden,cart} = props
    let length = cart.length
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Cart className="shopping-icon"/>
            <span className="item-count">{length}</span>
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.cartItems
})

const mapsDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapsDispatchToProps)(CartIcon)