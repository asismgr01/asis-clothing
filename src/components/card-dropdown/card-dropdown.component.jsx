import React from "react";
import "./card-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const CardDropdown = ({ cart }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      {cart.map((item) => (
        <CartItem 
          key={item.key}
          name={item.name}
          imgUrl={item.imageUrl}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
});

export default connect(mapStateToProps)(CardDropdown);
