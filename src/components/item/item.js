import './item.css'
import React, {Component, useState} from 'react'
import {Link, useParams} from 'react-router-dom'


export const Item = ({id, category, title, price, pictureURL, stock}) => {

    const [item, setItem] = useState({id, category, title, price, pictureURL, stock});

    return (
        <div className="item">
           
             <img src={pictureURL} />
             <div className="item_texts_container">
                <h4 className="item_title">{title}</h4>
                <p className="item_price">Precio: ${price}</p>
                <Link to={`/itemdetailcontainer/${id}`}><button className="button button_secondary">Ver detalles</button></Link>
             </div>
        </div>
        
    )
    
}