import './itemdetailcontainer.css'
import React, {Component, useState, useEffect} from 'react';
import {ItemDetail} from '../itemdetail/itemdetail'

export const ItemDetailContainer = (props) => {

    const [itemToShow, setItemToShow] = useState([]);


    /* Get Item with 2sec Delay */
    const getItems = (item) => {
        return new Promise ((resolve, reject) => {
            console.log("buscando item")
            setTimeout( () => {
                resolve(item)}, 2000)
        })
         .then(
            setItemToShow(item)

         ) 
    }

    useEffect(() => {
        getItems(item).then(result => {
            console.log(result)
            return (
                <div>
                  <ItemDetail item={result} />
        
                </div>
            )
        });
    }, [])
   
}