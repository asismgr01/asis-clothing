import React from "react";
import './cart-item.style.scss'

const CartItem = ({imgUrl,name,price,quantity}) => (
    <div className="cart-item">
        <img src={imgUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} X ${price}</span>
        </div>
    </div>
);

export default CartItem