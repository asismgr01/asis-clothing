import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils.js";
import { connect } from 'react-redux'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from '../card-dropdown/card-dropdown.component'

const Header = ({currentUser,cart}) => (
  <div className="header">
    <Link className="logo-container" to="/asis-clothing/">
      <Logo />
    </Link>
    <div className="options">
      {currentUser ? <p>{currentUser.displayName}</p> : ""}
      <Link className="option" to="/asis-clothing/shop">
        SHOP
      </Link>
      <Link className="option" to="/asis-clothing/under-construction/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <Link className="option" to="/asis-clothing/" onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
      ) : (
        <Link className="option" to="/asis-clothing/signin">
          SIGNIN
        </Link>
      )}
      <Link className="option" to="/asis-clothing/monsters/">
        Monsters
      </Link>
      <CartIcon/>
    </div>
    {
      cart ? null : <CartDropdown/>
    }
  </div>
);

//this state is root reducer state which contains all reducers
const mapStateToProps = state => (
  {
    currentUser: state.user.currentUser,
    cart: state.cart.hidden
  }
)
export default connect(mapStateToProps)(Header);
