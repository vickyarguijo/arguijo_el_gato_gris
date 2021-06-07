import { createContext, useEffect, useState } from 'react';
import firebase from 'firebase'
import 'firebase/firestore'
import {getFirestore} from '../../firebase/index'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
    const [orderId, setOrderId] = useState(0)
    const [canBuy, setCanBuy] = useState(true)

    const addItem = (id, quantity, title, pictureURL, price, stock) => {
       /* Check if the item is present in cart */
       let isPresent = false;
       let newCart = [...cart]
       if (cart.some(product => product.id === id)) {
        isPresent = true;
       }
       if (isPresent) {

        newCart[newCart.findIndex(prod => prod.id === id)].quantity += quantity; 
            setCart(newCart);
            return;

       } else {
        setCart([...cart, {id, quantity, title, pictureURL, price, stock}]) //ads new item if not present
       }
    }

    /* Functions for itemCount when in cart (adds and removes one item) */
    const addOneItem = (itemId) => {
        let newCart2 = [...cart]
        if(newCart2[newCart2.findIndex(prod => prod.id === itemId)].quantity > 1){
        
        newCart2[newCart2.findIndex(prod => prod.id === itemId)].quantity ++
        setCart(newCart2)
        return;
    }else {
        newCart2 = newCart2.filter((item) => item.id !== itemId)
        setCart(newCart2)
        return;
        }
    }

    const removeItem = (itemId) => {
        let newCart2 = [...cart]
        if(newCart2[newCart2.findIndex(prod => prod.id === itemId)].quantity > 1){
        
        newCart2[newCart2.findIndex(prod => prod.id === itemId)].quantity --
        setCart(newCart2)
        return;
    }else {
        newCart2 = newCart2.filter((item) => item.id !== itemId)
        setCart(newCart2)
        return;
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const cartTotalNumber = (cart) => {
        /* adds all cart.quantity to get total amount of items */
        var totalProducts = 0
        for(let x in cart){
            totalProducts += cart[x].quantity; //adds all quantity in cart
          }
        
        setCartQuantity(totalProducts)
    }

    const getCartTotalPrice = (cart) => {
        /* adds all cart.price to get total price */
        var totalPrice = 0
        for(let x in cart){
            totalPrice += (cart[x].price*cart[x].quantity); //adds all prices in cart
          }
        setCartTotalPrice(totalPrice)
    }

    const createOrder = async (buyer) => {
        if(canBuy){
            const {name, surname, phone, email} = buyer
            const cartInOrder = cart.map(prod => ({id: prod.id, title: prod.title, quantity: prod.quantity}))

            const db = getFirestore()
            const orders = db.collection("orders")
            const newOrder = {buyer: {name, surname, phone, email}, items: cartInOrder, total: cartTotalPrice, date: firebase.firestore.Timestamp.fromDate(new Date())}

            orders.add(newOrder).then(({id}) =>{setOrderId(id)}).catch(error => (error))
            
            updateStock()
        } else {
            alert("No contamos con stock para tu compra. Por favor revisá las cantidades a comprar.")
        }
    }

    const updateStock = async () => {
        const db = getFirestore()
        const batch = db.batch()
        
        cart.forEach((item) => {
            const itemRef = db.collection("items").doc(item.id)
            batch.update(itemRef, { stock: item.stock - item.quantity}) 
        })
       
        batch.commit()
        
        setCart([])
    }

    const checkIfCanBuy = () => {
        
        cart.map(item => {if(item.quantity > item.stock){
                alert(`Oops! No contamos con la cantidad que necesitás de ${item.title}. Stock disponible: ${item.stock}`)
                
                setCanBuy(false)

            } else {
                setCanBuy(true)
                
            }
        })
    }

    useEffect( () => {
        cartTotalNumber(cart)
        getCartTotalPrice(cart)
    }, [cart]
    )

    return (
        <CartContext.Provider value={{cart,cartQuantity, orderId, cartTotalPrice, canBuy, addItem, removeItem, addOneItem, clearCart, createOrder, checkIfCanBuy}}>
            {children}
        </CartContext.Provider>
    )
}
