import React from "react";
import "./card-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

const CardDropdown = ({ cart }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
});

export default connect(mapStateToProps)(CardDropdown);
