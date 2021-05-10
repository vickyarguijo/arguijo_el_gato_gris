import './itemdetail.css'
import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom'
import {ItemCount} from '../itemcount/itemcount'

export const ItemDetail = ({id, category, title, description, price, pictureURL, onAdd}) => {
    
    const [item, setItem] = useState({id, category, title, description, price, pictureURL});
    
    /* Saves onAdd quantity from itemCount */
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    /* Item Count Add Handler */
    const handleAdd = (quantity) => {
        setQuantityToAdd(quantity)
        }

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

                {(quantityToAdd == 0) ? (
                <ItemCount stock="5" initial={1} onAdd={handleAdd} />
                ) : (<Link exact to={'/cart'}><button className="">Finalizar Compra</button></Link>)}
                

               
             </div>
            
        </div>
        
    ) 
    return (
        <div className="itemDetail">
           
             <p>ID del producto: {id}</p>
             
            
        </div>
        
    )
}