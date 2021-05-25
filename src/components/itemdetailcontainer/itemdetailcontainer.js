import './itemdetailcontainer.css'
import React, {Component, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {ItemDetail} from '../itemdetail/itemdetail'
import {getFirestore} from '../../firebase/index'


export const ItemDetailContainer = (props) => {
    const {id} = useParams(); 
    
    console.log (`param ${id}`)
        
    const [itemToShow, setItemToShow] = useState('');
    
    
    /*
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
    } */
    useEffect(
      () => {
      /* Firebase */
      const db = getFirestore();
      const itemCollection = db.collection("items");
      let foundItem = itemCollection.doc(id)
     
      foundItem.get().then((doc) => {
        
        setItemToShow({id: doc.id, ...doc.data()})
        
        
      }).catch((error) => {
        console.error("Firestore error", error)
      })
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
                              pictureURL={itemToShow.pictureURL}
                              stock={itemToShow.stock}
                               />
                               ) : (<p>Cargando detalles del producto</p>)}
                    </div>
                
            ) 
       
}
