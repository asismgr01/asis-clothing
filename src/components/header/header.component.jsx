import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils.js";

const Header = (props) => (
  <div className="header">
    <Link className="logo-container" to="/asis-clothing/">
      <Logo />
    </Link>
    <div className="options">
      {props.user ? <p>{props.user.displayName}</p> : ""}
      <Link className="option" to="/asis-clothing/shop">
        SHOP
      </Link>
      <Link className="option" to="/asis-clothing/under-construction/contact">
        CONTACT
      </Link>
      {props.user ? (
        <Link className="option" to="" onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
      ) : (
        <Link className="option" to="/asis-clothing/signin">
          SIGNIN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
