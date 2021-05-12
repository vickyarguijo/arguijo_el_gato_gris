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

    useEffect( () => {
        setCartQuantity(cart.length)
    }, [cart]
    )

    return (
        <CartContext.Provider value={{cart,cartQuantity,addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
