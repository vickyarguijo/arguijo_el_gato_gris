import './itemdetailcontainer.css'
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {ItemDetail} from '../itemdetail/itemdetail'
import {getFirestore} from '../../firebase/index'


export const ItemDetailContainer = (props) => {
    const {id} = useParams(); 
    
    const [itemToShow, setItemToShow] = useState('');
    
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
