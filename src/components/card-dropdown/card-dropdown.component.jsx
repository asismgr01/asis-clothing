import React from 'react'
import './card-dropdown.style.scss'
import CustomButton from '../custom-button/custom-button.component'

const CardDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

export default CardDropdown