import './itemlist.css'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Item} from '../item/item'
import {getFirestore} from '../../firebase/index'

export const ItemList = (props) => {
    const [productData, setProductData] = useState([]);
    
    let { categoryId } = useParams()
  
    

    const showFilteredProducts = (productData) => {
      return (
        productData.length >0 ? (productData.map((product, index) => 
              <Item key={index}
                    id={product.id}
                    category={product.category} 
                    title={product.title} 
                    price={product.price} 
                    pictureURL={product.pictureURL}
                    stock={product.stock}  />
         )) : (<p>Cargando productos</p>)
      )
  }
  
    useEffect(
      () => {
      
        /* Firebase */
        const db = getFirestore();
        const itemCollection = db.collection("items");
        let filteredProducts = [''];
        if (categoryId){
          filteredProducts = itemCollection.where('category','==',categoryId) }
        else {
          /* show all products with no category at home page */
          filteredProducts = itemCollection;
        }
        filteredProducts.get().then((querySnapshot) => {
          
          setProductData(querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()})))
          
          
        }).catch((error) => {
          console.error("Firestore error", error)
        })
  }, [categoryId])
  
    return (
        <div className="itemList">
           
           {showFilteredProducts(productData)}
           
        </div>
    )
    
}