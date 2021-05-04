import './itemdetailcontainer.css'
import React, {Component, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {ItemDetail} from '../itemdetail/itemdetail'



export const ItemDetailContainer = (props) => {
    const {id} = useParams();
    
    console.log (`param ${id}`)
    const [itemToShow, setItemToShow] = useState('');

    /* Get Item with 2sec Delay  */
    const getItems = (id) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
              return res(id)
            }, 2000)
          })
         .then(
            setItemToShow(id)
            
         ) 
    } 
    console.log(itemToShow)
 
            return (
                
                    <div className="itemDetailContainer">
                        <p>hola soy itemDetailContainer</p>
                        <ItemDetail item={itemToShow} />
                         
                    </div>
                
            ) 
       
}
