import './item.css'
import React, {Component, useState} from 'react'
import {Link, useParams} from 'react-router-dom'


export const Item = ({id, category, title, price, pictureURL, stock}) => {

    const [item, setItem] = useState({id, category, title, price, pictureURL, stock});

    return (
        <div className="item">
           
             <h4>{title}</h4>
             <img src={pictureURL} />
             <p>Precio: ${price}</p>
             <p>ID del producto: {id}</p>
             <Link to={`/itemdetailcontainer/${id}`}><button>Ver detalles</button></Link>
            
        </div>
        
    )
    
}