import './itemcount.css'
import React, {Component, useState} from 'react';

export const ItemCount = ({stock, initial}) => {
    const [quantity, setQuantity] = useState(initial);

    function subtract(quantity) {
        if(quantity > 1) {
          setQuantity(quantity - 1)
        }
    }

    function add(quantity, stock) {
       if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const onAdd = (quantity) => alert(`Agregaste ${quantity} productos al carrito`)

    return (
        <div className="itemCount">
            <div className="itemQuantityContainer">
                <div className="operator" onClick={ () => subtract(quantity)}>-</div>
                <div className="quantity">{quantity}</div>
                <div className="operator" onClick={ () => add(quantity, stock)}>+</div>
            </div>
            <button className="addToCartBtn" onClick={ () => onAdd(quantity)}>Agregar al Carrito</button>
        </div>
        
    )
    
}