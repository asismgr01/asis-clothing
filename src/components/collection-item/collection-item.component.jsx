import React from "react";
import './collection-item.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = (props) => { 
    return (
    <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{props.name}</span>
            <span className="price">{props.price}</span>
        </div>
        <CustomButton 
            inverted
            onClick={() => props.addItem(props.item)}
        >ADD TO CART</CustomButton>
    </div>
    )
}
const mapsDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null,mapsDispatchToProps)(CollectionItem)