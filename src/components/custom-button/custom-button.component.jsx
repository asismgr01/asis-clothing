import React from "react";
import "./custom-button.style.scss";

const CustomButton = (props) => (
  <div className={`${(props.width) ? "large" : ""}`}>
    <button
      className={`${props.inverted ? "inverted" : ""} ${props.googleButton ? "googleButton" : ""} custom-button`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  </div>
);

export default CustomButton;
