import './itemcount.css'
import React, {Component, useState} from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    function subtract(quantity) {
        if(quantity > 1) {
          setQuantity(quantity - 1)
        }
    }

    function add(quantity, stock) {
        quantity = parseInt(quantity)
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    return (
        <div className="itemCount">
            <div className="itemQuantityContainer">
                <div className="operator" onClick={ () => subtract(quantity)}>-</div>
                <div className="quantity">{quantity}</div>
                <div className="operator" onClick={ () => add(quantity, stock)}>+</div>
            </div>
            <button className="addToCartBtn">Agregar al Carrito</button>
        </div>
        
    )
    
}