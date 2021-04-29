import './item.css'
import React, {Component, useState} from 'react';


export const Item = ({id, title, price, pictureURL}) => {

    console.log(pictureURL)
    return (
        <div className="item">
           
             <h4>{title}</h4>
             <img src={pictureURL} />
             <p>Precio: ${price}</p>
             <p>ID del producto: {id}</p>
             
            
        </div>
        
    )
    
}