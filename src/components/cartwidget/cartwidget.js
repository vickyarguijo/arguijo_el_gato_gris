import cartImg from '../../images/cart_small.png'
import './cartwidget.css'
import {useContext} from 'react'
import {CartContext} from '../context/cartcontext'
import {Link} from 'react-router-dom'

export const CartWidget = () => {
    const cartQuantity = useContext(CartContext);
    
    return (
        
            <div className={cartQuantity.cartQuantity ? 'cartwidget' : 'hide'}>
                <Link to={`/cart`}>
                    <img src={cartImg} alt="Carrito de compras" />
                </Link>
                <span className="cartQuantity">{cartQuantity.cartQuantity}</span>
            </div>
        
    )

}