import './itemdetail.css'
import React, {Component, useState} from 'react';


export const ItemDetail = ({id, category, title, description, price, pictureURL}) => {
    
    const [item, setItem] = useState({id, category, title, description, price, pictureURL});
    console.log(pictureURL)
   return (
        <div className="itemDetail">
           
             <h4>{title}</h4>
             <img src={pictureURL} />
             <p>Precio: ${price}</p>
             <p>Descripción: {description}</p> 
             <p>ID del producto: {id}</p>
             
            
        </div>
        
    ) 
    return (
        <div className="itemDetail">
           
             <p>ID del producto: {id}</p>
             
            
        </div>
        
    )
}