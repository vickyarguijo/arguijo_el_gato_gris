import './itemdetail.css'
import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom'
import {ItemCount} from '../itemcount/itemcount'
import {useContext} from 'react'
import {CartContext} from '../context/cartcontext'

export const ItemDetail = ({id, category, title, description, price, pictureURL}) => {
    
    const [item, setItem] = useState({id, category, title, description, price, pictureURL});
    
    /* Saves onAdd quantity from itemCount */
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    /* Adds item to cart using context addItem function */
    const {addItem} = useContext(CartContext)

    /* Item Count Add Handler */
    const handleAdd = (id, quantity) => {
        setQuantityToAdd(quantity)
        /* Adds item to cart using context addItem function */
        addItem(id)
        }
console.log(quantityToAdd)
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
                <ItemCount stock="5" initial={1} onAdd={handleAdd} id={id} />
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