import './cart.css'
import {useContext} from 'react'
import {CartContext} from '../context/cartcontext'
import {Link} from 'react-router-dom'

export const Cart = () => {
    const {cart} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);
    const {clearCart} = useContext(CartContext);
    console.log(cart)
    return (
        <div className='cart'>
           { cart.length > 0 ? (cart.map((cartItem, index) =>
               <div className='cartItem' key={index}>
                    <img src={cartItem.pictureURL} />
                    <h4>{cartItem.title}</h4>
                    <p className='cartPrecioUnidad'>Precio por unidad: ${cartItem.price}</p>
                    <p className='cartCantidad'>Cantidad: {cartItem.quantity}</p>
                    <p className='cartPrecioTotal'>Precio Total: ${cartItem.price*cartItem.quantity}</p>
                    <button className='cartBtnRemove' onClick={() => removeItem(cartItem.id)}>Quitar del carrito</button>
                </div>
              
         )) : <p className='cartEmpty'>Tu carrito se encuentra vacío. Vuelve al <Link exact to="/">home</Link> para agregar productos.</p> }

            {cart.length > 0 && <button className='cartClear' onClick={clearCart}>Vaciar Carrito</button>}
         </div>
    )

}