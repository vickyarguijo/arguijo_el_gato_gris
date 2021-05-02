import './itemdetail.css'
import React, {Component, useState} from 'react';


export const ItemDetail = ({item}) => {

   return (
        <div className="itemDetail">
           
             <h4>{item.title}</h4>
             <img src={item.pictureURL} />
             <p>Precio: ${item.price}</p>
             <p>Descripción: {item.description}</p>
             <p>ID del producto: {item.id}</p>
             
            
        </div>
        
    )
    
}