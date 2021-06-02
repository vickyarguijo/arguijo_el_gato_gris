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
    const {createOrder, updateStock} = useContext(CartContext);
    
    const [inputValues, setInputValues] = useState({
        name:'',
        surname:'',
        phone:0,
        email:''
      });
    const { name, surname, phone, email } = inputValues;
    const [error, setError] = useState(false);

    const handleChange = ({target: { name, value }}) => setInputValues({ ...inputValues, [name]: value });
  
    const handleBlur = ({target: { name, value }}) => setInputValues({ ...inputValues, [name]: value.trim() }

    );

    function onSubmit(e) {
        e.preventDefault();
    
        if([name, surname, phone, email].includes('')) {
          setError(true);
          return;
        }
    }

    console.log(cart)
    return (
        <div className='cart'>
           { cart.length > 0 ? (cart.map((cartItem, index) =>
               <div className='cartItem' key={index}>
                   <div className="cartItem_container1">
                        <img src={cartItem.pictureURL} />
                        <h4>{cartItem.title}</h4>
                    </div>
                    <div className="cartItem_container2">
                        <p className='cartPrecioUnidad'>Precio: ${cartItem.price}</p>
                        <p className='cartCantidad'>Cantidad: {cartItem.quantity}</p>
                        <p className='cartSubTotal'>Subtotal: ${cartItem.price*cartItem.quantity}</p>
                    </div>
                    <button className='button button_terciary button_gray' onClick={() => removeItem(cartItem.id)}>Quitar</button>
                </div>
              
         )) : <p className='cartEmpty'>Tu carrito se encuentra vacío. Vuelve al <Link exact to="/"><strong>home</strong></Link> para agregar productos.</p> }

            {cart.length > 0 && 
                <Fragment>
                    <button className='button button_terciary button_gray button_clearCart' onClick={clearCart}>Vaciar Carrito</button>
                    <p className='cartTotal'>Total de tu compra: ${cartTotalPrice}</p>
                    
                    <h3 className='cart_h3'>Completá tus datos para finalizar la compra:</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form_data_container">
                            <div className='form_container1'>
                                <label>Nombre:</label>
                                {error && <span className='errorMessage'>*Debes completar este campo para finalizar la orden de compra. </span>}
                                <input type="text" name="name" value={name} onChange={handleChange} onBlur={handleBlur} placeholder="Nombre" />

                                <label>Apellido:</label>
                                {error && <span className='errorMessage'>*Debes completar este campo para finalizar la orden de compra. </span>}
                                <input type="text" name="surname" value={surname} onChange={handleChange} onBlur={handleBlur} placeholder="Apellido" />
                            </div>
                        
                            <div className='form_container2'>
                                <label>Teléfono:</label>
                                {error && <span className='errorMessage'>*Debes completar este campo para finalizar la orden de compra. </span>}
                                <input type="tel" name="phone" value={phone} onChange={handleChange} onBlur={handleBlur} placeholder="XXX-XXXX" />

                                <label>E-mail:</label>
                                {error && <span className='errorMessage'>*Debes completar este campo para finalizar la orden de compra. </span>}
                                <input type="email" name="email" value={email} onChange={handleChange} onBlur={handleBlur} placeholder="example@example.com" />
                            </div>
                        </div>
                        <div className='form_button_container'>
                            <Link to='/confirmation'>
                                <button className='button button_primary' onClick={()=> createOrder(inputValues)} type="submit" disabled={[name, surname, phone, email].includes('')}>Comprar</button>
                            </Link>
                        </div>
                    </form>
                </Fragment>
            }
         </div>
    )

}