import './itemdetail.css'
import React, {Component, useState} from 'react';


export const ItemDetail = ({id}) => {
    console.log(id)
    /* Falta traer el array de productos para comparar con el id 
   return (
        <div className="itemDetail">
           
             <h4>{item.title}</h4>
             <img src={item.pictureURL} />
             <p>Precio: ${item.price}</p>
             <p>Descripción: {item.description}</p> 
             <p>ID del producto: {item.id}</p>
             
            
        </div>
        
    ) */
    return (
        <div className="itemDetail">
           
             <p>ID del producto: {id}</p>
             
            
        </div>
        
    )
}