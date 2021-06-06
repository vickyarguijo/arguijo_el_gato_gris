import './itemdetail.css'
import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom'
import {ItemCount} from '../itemcount/itemcount'
import {useContext} from 'react'
import {CartContext} from '../context/cartcontext'

export const ItemDetail = ({id, category, title, description, price, pictureURL, stock}) => {
    
    const [item, setItem] = useState({id, category, title, description, price, pictureURL, stock});
    
    /* Saves onAdd quantity from itemCount */
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    /* Adds item to cart using context addItem function */
    const {addItem} = useContext(CartContext)

    /* Item Count Add Handler */
    const handleAdd = (id, quantity, title, pictureURL, price, stock) => {
        setQuantityToAdd(quantity)
        /* Adds item to cart using context addItem function */
        addItem(id, quantity, title, pictureURL, price, stock)
        }

    /* Show itemCount or Out Of Stock message, or Finalize order button */
    const showItemCountOrButton = () => {
        if(quantityToAdd == 0 && stock > 0){
            return <ItemCount stock={stock} initial={1} onAdd={handleAdd} id={id} title={title} pictureURL={pictureURL} price={price} />
        } else if(quantityToAdd == 0 && stock == 0) {
            return <p className="itemDetail_out_of_stock">SIN STOCK</p>
        } else {
            return <Link exact to={'/cart'}><button className="button button_primary">Finalizar Compra</button></Link>
        }
    }

   return (
        <div className="itemDetail">
            
             <div className="itemDetailImage">
                <img src={pictureURL} />
             </div>
             <div className="itemDetailInfo">
                <h2>{title}</h2>
                <p className="itemDetailPrice">Precio: ${price}</p>
                <p className="itemDetailDescription">Descripción: </p><p className="itemDetailDescription_text">{description}</p> 
                <p className="itemDetailId">ID del producto: {id}</p>
                {stock>0 && <p className="itemDetailStock">Stock disponible: {stock}</p>}

                {showItemCountOrButton()}

               
             </div>
            
        </div>
        
    ) 
    
}