import './itemdetail.css'
import React, {Component, useState} from 'react';
import {ItemCount} from '../itemcount/itemcount'

export const ItemDetail = ({id, category, title, description, price, pictureURL}) => {
    
    const [item, setItem] = useState({id, category, title, description, price, pictureURL});
    console.log(pictureURL)
   return (
        <div className="itemDetail">
            
             <div className="itemDetailImage">
                <img src={pictureURL} />
             </div>
             <div className="itemDetailInfo">
                <h2>{title}</h2>
                <p className="itemDetailPrice">Precio: ${price}</p>
                <p className="itemDetailDescription">Descripción: <br />{description}</p> 
                <p className="itemDetailId">ID del producto: {id}</p>
                <ItemCount stock="5" initial={1} />
             </div>
            
        </div>
        
    ) 
    return (
        <div className="itemDetail">
           
             <p>ID del producto: {id}</p>
             
            
        </div>
        
    )
}