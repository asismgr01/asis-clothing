import './collection-preview.style.scss'
import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'

const Collection = (props) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{props.title}</h1>
            <div className="preview">
                {
                    props.items.filter((item,index) => index < 4).map(item => (
                        <CollectionItem 
                            key={item.id}
                            imageUrl={item.imageUrl}
                            name={item.name}
                            price={item.price}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Collection