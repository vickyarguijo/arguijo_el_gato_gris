import './itemdetailcontainer.css'
import React, {Component, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {ItemDetail} from '../itemdetail/itemdetail'
import products from '../../products'


export const ItemDetailContainer = (props) => {
    const {id} = useParams();
    
    console.log (`param ${id}`)
    
   
    let foundItem = products.find((product) => product.id == id)

    const [itemToShow, setItemToShow] = useState(foundItem);
   
    
    const getItems = (products) => {
        return new Promise((res, rej) => {
          res(products)
            
          })
         .then(
          setItemToShow(foundItem)
         )
        
    }  

  /*  useEffect(
      () => {
        
         getItems(products)
     
  }, [id]) */

    console.log(`este es ${itemToShow.title}`)
 
            return (
                
                    <div className="itemDetailContainer">
                                                
                        <ItemDetail id={itemToShow.id}
                              category={itemToShow.category} 
                              title={itemToShow.title} 
                              description={itemToShow.description}
                              price={itemToShow.price}
                              pictureURL={itemToShow.image.pictureURL}
                               />
                         
                    </div>
                
            ) 
       
}
