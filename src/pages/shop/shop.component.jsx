import React from "react";
import SHOP_DATA from "./shop.data.js";
import Collection from "../../components/collection-preview/collection-preview.component.jsx";
import './shop.style.scss'

class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }
    render(){
        const {collections} = this.state;
        return(
            <div>
                 {
                    collections.map(collection => (
                        <Collection 
                        title={collection.title} 
                        items={collection.items}
                        key={collection.id}
                        />        
                    ))
                }        
            </div>
        );
    }
}

export default Shop