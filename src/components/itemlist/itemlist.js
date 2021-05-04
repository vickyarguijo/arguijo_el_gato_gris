import './itemlist.css'
import React, {Component, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Item} from '../item/item'
import productMateHP from '../../images/product_mate.jpg'
import productMacetaGato from '../../images/product_maceta_gato.jpg'
import productPortaCeluGato from '../../images/product_porta_celu_gato.jpg'


export const ItemList = (props) => {
    const [productData, setProductData] = useState([]);
    
    
  
    const products = [
        {
        id: 56789, 
        categoryId: "ofertas",   
        title: "Mate Harry Potter",
        price: 2000,
        description: "Esta es la descripción del Mate Harry Potter",
        pictureURL: productMateHP,
      },
      {
        id: 12345, 
        categoryId: "ofertas",   
        title: "Maceta Gato Negro",
        price: 1500,
        description: "Esta es la descripción de la maceta Gato Negro",
        pictureURL: productMacetaGato,
      },
      {
        id: 5678,   
        categoryId: "catlovers", 
        title: "Porta Celular Gato",
        price: 1700,
        description: "Esta es la descripción del Porta Celu Gato",
        pictureURL: productPortaCeluGato,
      },
    ]
   

    const getProducts = (products) => { 
        return new Promise ((resolve, reject) => {
            console.log(products)
            setTimeout( () => {
                resolve(products)}, 2000)
        })
         .then(
            setProductData(products)
            
         ) 
         
    }

    useEffect(
      () => {
      getProducts(products).then(result => {
          console.log(result)
          
      });
      getProducts(products)
  }, [])

    return (
        <div className="itemList">
           
           {productData.length >0 ? (productData.map((product) => 
                <Item id={product.id} category={product.categoryId} title={product.title} price={product.price} pictureURL={product.pictureURL} />
           )) : (<p>No tengo productos</p>)}
           
        </div>
    )
    
}