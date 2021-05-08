import './itemlist.css'
import React, {Component, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Item} from '../item/item'
import products from '../../products'

export const ItemList = (props) => {
    const [productData, setProductData] = useState([]);
    
    let { categoryId } = useParams()
  
    let filteredProducts = []
    
    if (categoryId)  {
      filteredProducts = products.filter((product) => product.category === categoryId)
   } else {
     filteredProducts = products
   }
  
    
    const getProducts = (products) => { 
        return new Promise ((resolve, reject) => {
            
            setTimeout( () => {
                resolve(products)}, 2000)
        })
        .then(
          setProductData(products)
          
        ) 
         .then(
            setProductData(products)
            
         ) 
         
    }

    const showFilteredProducts = (productData) => {
      return (
        productData.length >0 ? (productData.map((product) => 
              <Item id={product.id} 
                    category={product.category} 
                    title={product.title} 
                    price={product.price} 
                    pictureURL={product.image.pictureURL} />
         )) : (<p>No tengo productos</p>)
      )
  }
  
    useEffect(
      () => {
       

      getProducts(filteredProducts)

  }, [categoryId])

    return (
        <div className="itemList">
           
           {showFilteredProducts(productData)}
           
        </div>
    )
    
}