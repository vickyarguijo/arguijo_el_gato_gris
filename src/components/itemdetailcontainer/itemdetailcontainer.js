import './itemdetailcontainer.css'
import React, {Component, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {ItemDetail} from '../itemdetail/itemdetail'
import products from '../../products'


export const ItemDetailContainer = (props) => {
    const {id} = useParams(); 
    
    console.log (`param ${id}`)
        
    const [itemToShow, setItemToShow] = useState('');
    
    let foundItem = ''

    const getItems = (products) => {
      return new Promise((res, rej) => {
        res(products)
          
        })
       .then ( 
        foundItem = products.find((product) => product.id == id)
         
        )
        
       .then( 
          setItemToShow(foundItem)
       )
    }
    useEffect(
      () => {
      setTimeout (() => {

        getItems(products)
       
      },1000)
  }, [id])

    console.log(`este es ${itemToShow.title}`)
 
            return (
               
                    <div className="itemDetailContainer">
                           { (itemToShow) ? (                     
                        <ItemDetail id={itemToShow.id}
                              category={itemToShow.category} 
                              title={itemToShow.title} 
                              description={itemToShow.description}
                              price={itemToShow.price}
                              pictureURL={itemToShow.image.pictureURL}
                               />
                               ) : (<p>Cargando detalles del producto</p>)}
                    </div>
                
            ) 
       
}
