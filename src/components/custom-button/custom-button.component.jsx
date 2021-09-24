import React from "react";
import "./custom-button.style.scss";

const CustomButton = (props) => (
  <div>
    <button
      className={`${props.googleButton ? "googleButton" : ""} custom-button`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  </div>
);

export default CustomButton;
