import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)


    const addItem = (id, quantity, title, pictureURL, price) => {
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
        setCart([...cart, {id, quantity, title, pictureURL, price}]) //ads new item if not present
       }
    }

    console.log(cart)

    const removeItem = (itemId) => {
        let newCart2 = [...cart]
        if(newCart2[newCart2.findIndex(prod => prod.id === itemId)].quantity > 1){
        //cart.filter((item) => item.id !== itemId)
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
          console.log(totalProducts)
        setCartQuantity(totalProducts)
    }

    useEffect( () => {
        cartTotalNumber(cart)
       
    }, [cart]
    )

    return (
        <CartContext.Provider value={{cart,cartQuantity,addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
