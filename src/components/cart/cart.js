import './cart.css'
import {useContext, useState} from 'react'
import {CartContext} from '../context/cartcontext'
import {Link} from 'react-router-dom'
import {Fragment} from 'react'

export const Cart = () => {
    const {cart} = useContext(CartContext);
    const {cartTotalPrice} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);
    const {clearCart} = useContext(CartContext);
    const {createOrder} = useContext(CartContext);
    const [inputValues, setInputValues] = useState({
        name:'',
        phone:0,
        email:''
      });
    const { name, phone, email } = inputValues;
    const [error, setError] = useState(false);

    const handleChange = ({target: { name, value }}) => setInputValues({ ...inputValues, [name]: value });
  
    const handleBlur = ({target: { name, value }}) => setInputValues({ ...inputValues, [name]: value.trim() });

    function onSubmit(e) {
        e.preventDefault();
    
        if([name, phone, email].includes('')) {
          setError(true);
          return;
        }
    }

    console.log(cart)
    return (
        <div className='cart'>
           { cart.length > 0 ? (cart.map((cartItem, index) =>
               <div className='cartItem' key={index}>
                    <img src={cartItem.pictureURL} />
                    <h4>{cartItem.title}</h4>
                    <p className='cartPrecioUnidad'>Precio por unidad: ${cartItem.price}</p>
                    <p className='cartCantidad'>Cantidad: {cartItem.quantity}</p>
                    <p className='cartSubTotal'>Subtotal: ${cartItem.price*cartItem.quantity}</p>
                    <button className='cartBtnRemove' onClick={() => removeItem(cartItem.id)}>Quitar del carrito</button>
                </div>
              
         )) : <p className='cartEmpty'>Tu carrito se encuentra vacío. Vuelve al <Link exact to="/">home</Link> para agregar productos.</p> }

            {cart.length > 0 && 
                <Fragment>
                    <p>Total de tu compra: ${cartTotalPrice}</p>
                    <button className='cartClear' onClick={clearCart}>Vaciar Carrito</button>

                    <form onSubmit={onSubmit}>
                        <label className="formLabel">Nombre:</label>
                        {error && <span className='errorMessage'>*Debes completar este campo para finalizar la orden de compra. </span>}
                        <input type="text" name="name" value={name} onChange={handleChange} onBlur={handleBlur} />

                        <label className="formLabel">Teléfono:</label>
                        {error && <span className='errorMessage'>*Debes completar este campo para finalizar la orden de compra. </span>}
                        <input type="text" name="phone" value={phone} onChange={handleChange} onBlur={handleBlur} />

                        <label className="formLabel">E-mail:</label>
                        {error && <span className='errorMessage'>*Debes completar este campo para finalizar la orden de compra. </span>}
                        <input type="text" name="email" value={email} onChange={handleChange} onBlur={handleBlur} placeholder="example@example.com" />

                        <button className='cartFinalizarCompra' onClick={()=> createOrder(inputValues, cart)} type="submit" disabled={[name, phone, email].includes('')}>Comprar</button>
                    </form>
                </Fragment>
            }
         </div>
    )

}