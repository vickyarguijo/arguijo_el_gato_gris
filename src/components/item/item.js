import './item.css'
import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom'

export const Item = ({id, categoryId, title, price, pictureURL}) => {

    const [item, setItem] = useState({id, categoryId, title, price, pictureURL});

    return (
        <div className="item">
           
             <h4>{title}</h4>
             <img src={pictureURL} />
             <p>Precio: ${price}</p>
             <p>ID del producto: {id}</p>
             <Link to={`/itemdetailconainer/:${id}`}><button>Ver detalles</button></Link>
            
        </div>
        
    )
    
}