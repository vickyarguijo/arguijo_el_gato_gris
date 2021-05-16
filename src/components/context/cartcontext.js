import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)


    const addItem = (id, quantity, title, pictureURL, price) => {
       
       setCart([...cart, {id, quantity, title, pictureURL, price}])
       
    }

    console.log(cart)

    const removeItem = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId)
        setCart(newCart)
    }

    const isInCart = (id, quantity, cart) => {
        let foundId = id;
        /*
       if (cart.some(item => item.id === id)) {
            cart[id=id].quantity += quantity
          } */
        if (cart.some(item => item.id === id)) {
            for(let i = 0; i < cart.length; i ++) {
                if(cart[i][id] === foundId) {
                cart[i][quantity] += quantity
                }}
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
          console.log(totalProducts)
        setCartQuantity(totalProducts)
    }

    useEffect( () => {
        cartTotalNumber(cart)
        //setCartQuantity(cartTotalNumber)
    }, [cart]
    )

    return (
        <CartContext.Provider value={{cart,cartQuantity,addItem, removeItem, isInCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
