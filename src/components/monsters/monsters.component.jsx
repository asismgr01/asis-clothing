import React from "react";
import "./monsters.style.scss";
import { connect } from 'react-redux'
import { addProductCart } from '../../redux/cart-item/cart-item.action'

class Monsters extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: 1,
          name: "Brown Brim",
          imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
          //imageUrl: "/images/shop-img/hats/brown-brim.png",
          price: 25,
        },
        {
          id: 2,
          name: "Blue Beanie",
          imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
          //imageUrl: "/images/shop-img/hats/blue-beanie.png",
          price: 18,
        },
        {
          id: 3,
          name: "Brown Cowboy",
          imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
          //imageUrl: "/images/shop-img/hats/brown-cowboy.png",
          price: 35,
        },
        {
          id: 4,
          name: "Grey Brim",
          imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
          //imageUrl: "/images/shop-img/hats/grey-brim.png",
          price: 25,
        },
        {
          id: 5,
          name: "Green Beanie",
          imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
          //imageUrl: "/images/shop-img/hats/green-beanie.png",
          price: 18,
        },
        {
          id: 6,
          name: "Palm Tree Cap",
          imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
          //imageUrl: "/images/shop-img/hats/palm-tree-cap.png",
          price: 14,
        },
        {
          id: 7,
          name: "Red Beanie",
          imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
          //imageUrl: "/images/shop-img/hats/red-beanie.png",
          price: 18,
        },
        {
          id: 8,
          name: "Wolf Cap",
          imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
          //imageUrl: "/images/shop-img/hats/wolf-cap.png",
          price: 14,
        },
        {
          id: 9,
          name: "Blue Snapback",
          imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
          //imageUrl: "/images/shop-img/hats/blue-snapback.png",
          price: 16,
        },
      ],
      cartProduct: [],
    };
  }
  handleClick = (id) => {
    const {cartProduct,monsters} = this.state
    const {addProductCart} = this.props
    cartProduct.push(monsters[id-1])
    addProductCart({
        ...cartProduct
    })
  };
  render() {
    const { monsters } = this.state;
    return (
      <div>
        {monsters.map((monster) => (
          <div
            className="monster"
            onClick={() => this.handleClick(monster.id)}
            style={{ backgroundImage: `url(${monster.imageUrl})` }}
            key={monster.id}
          >
            <p>{monster.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapsDispatchToProps = dispatch => ({
    addProductCart: product => dispatch(addProductCart(product))    
}) 
export default connect(null,mapsDispatchToProps)(Monsters);
