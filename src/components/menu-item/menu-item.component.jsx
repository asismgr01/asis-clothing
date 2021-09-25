import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router";

const MenuItem = ({size,imageUrl,title,history,linkUrl,match}) => (
  <div className={`${size} menu-item`}>
      <div 
        className="background-image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }
        }
        onClick={() =>(
            history.push(`/asis-clothing/under-construction/${linkUrl}`)
          )}
      />
    <div className="content" onClick={() => history.push(`/asis-clothing/under-construction/${linkUrl}`)}>
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem)