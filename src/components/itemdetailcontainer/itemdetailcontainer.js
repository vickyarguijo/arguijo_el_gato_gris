import './itemdetailcontainer.css'
import React, {Component, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {ItemDetail} from '../itemdetail/itemdetail'
import products from '../../products'


export const ItemDetailContainer = (props) => {
    const {id} = useParams();
    
    console.log (`param ${id}`)
    

    const foundItem = products.find((product) => product.id == id)

    const [itemToShow, setItemToShow] = useState('');
   /* const getItems = (id) => setItemToShow(foundItem) */

    /* Get Item with 2sec Delay */
    const getItems = (id) => {
        return new Promise((res, rej) => {
            
              return res(id)
          
          })
         .then(
            setItemToShow(foundItem)
            
         ) 
    }  

    useEffect(
      () => {
        getItems(id).then(result => {
          console.log(result)
          
      });
      getItems(id)
  }, [id]) 

    console.log(`este es ${itemToShow.title}`)
 
            return (
                
                    <div className="itemDetailContainer">
                                                
                        <ItemDetail id={itemToShow.id}
                              category={itemToShow.category} 
                              title={itemToShow.title} 
                              description={itemToShow.description}
                              price={itemToShow.price} 
                               />
                         
                    </div>
                
            ) 
       
}
