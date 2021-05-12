import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)


    const addItem = (id, quantity) => {
       setCart([...cart, {id, quantity}])
    }
    console.log(cart)
    const removeItem = (itemId) => {
        const newCart = cart.filter((item) => itemId.id !== itemId)
        setCart(newCart)
    }

    const cartTotalNumber = (cart) => {
        /* adds all cart.quantity to get total amount of items */
        
        var totalProducts = 0
        for(let x in cart){
            totalProducts += cart[x].quantity; //NO FUNCIONA
          }
          console.log(totalProducts)
        return totalProducts;
    }

    useEffect( () => {
        setCartQuantity(cartTotalNumber)
    }, [cart]
    )

    return (
        <CartContext.Provider value={{cart,cartQuantity,addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
