import './itemlist.css'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Item} from '../item/item'
import {getFirestore} from '../../firebase/index'

export const ItemList = (props) => {
    const [productData, setProductData] = useState([]);
    
    let { categoryId } = useParams()
  
    /*
    let filteredProducts = []
    
    
    if (categoryId)  {
      filteredProducts = products.filter((product) => product.category === categoryId)
   } else {
     filteredProducts = products
   } */
  
    /*
    const getProducts = (products) => { 
        return new Promise ((resolve, reject) => {
           resolve(products) 

          })
        .then(
          setProductData(products)
        ) 
    } */

    const showFilteredProducts = (productData) => {
      return (
        productData.length >0 ? (productData.map((product) => 
              <Item 
                    category={product.category} 
                    title={product.title} 
                    price={product.price} 
                    pictureURL={product.pictureURL} />
         )) : (<p>Cargando productos</p>)
      )
  }
  
    useEffect(
      () => {
      /* setTimeout (() => {
          getProducts(filteredProducts)
        },1000) */

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
          
          setProductData(querySnapshot.docs.map((doc) => doc.data()))
          
          console.log(productData)
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