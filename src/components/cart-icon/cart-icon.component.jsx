import React from "react";
import {ReactComponent as Cart} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
import { connect } from "react-redux";
import  toggleCartHidden  from '../../redux/cart/cart.action'

const CartIcon = (props) => {
    console.log(props)
    const {cartProduct,toggleCartHidden} = props
    let length = 0
    for (const product in cartProduct) {
        length++
      }
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Cart className="shopping-icon"/>
            <span className="item-count">{length}</span>
        </div>
    );
}

const mapStateToProps = state => ({
    cartProduct: state.cartItem.cartProduct
})

const mapsDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapsDispatchToProps)(CartIcon)