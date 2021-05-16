import cartImg from '../../images/cart_small.png'
import './cartwidget.css'
import {useContext} from 'react'
import {CartContext} from '../context/cartcontext'


export const CartWidget = () => {
    const cartQuantity = useContext(CartContext);
    
    return (
        
            <div className={cartQuantity.cartQuantity ? 'cartwidget' : 'hide'}>
                <img src={cartImg} alt="Carrito de compras" />
                <span className="cartQuantity">{cartQuantity.cartQuantity}</span>
            </div>
        
    )

}