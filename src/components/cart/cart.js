import './cart.css'
import {useContext, useState, useEffect} from 'react'
import {CartContext} from '../context/cartcontext'
import {Link} from 'react-router-dom'
import {Fragment} from 'react'

export const Cart = () => {
    const {cart, cartTotalPrice,removeItem, clearCart, canBuy, checkIfCanBuy, createOrder} = useContext(CartContext);
   
    const [inputValues, setInputValues] = useState({
        name:'',
        surname:'',
        phone:'',
        email:''
      });
    const { name, surname, phone, email } = inputValues;
    const [error, setError] = useState(false);

    const handleChange = ({target: { name, value }}) => setInputValues({ ...inputValues, [name]: value });
  
    const handleBlur = ({target: { name, value }}) => setInputValues({ ...inputValues, [name]: value.trim() }
    );

    const handleTel = (e) => {
        if(!((e.key == 1) || (e.key == 2) || (e.key == 3) || (e.key == 4) || (e.key == 5) || (e.key == 6) || (e.key == 7) || (e.key == 8) || (e.key == 9) || (e.key == 0) || (e.key == "ArrowLeft") || (e.key == "ArrowRight") || (e.key == "Backspace")) ) {
           e.preventDefault();
        }
    }

    function checkFormValues(e) {
        
         if([name, surname, phone, email].includes('')) {
          setError(true);
          return;
        }
        if(phone.length < 8){
            setError(true);
          return;
        }
        if(error){
            e.preventDefault();
        } 
    }

    useEffect( () => {
        checkIfCanBuy()
       
    }, [cart]
    )

    console.log(cart)
    return (
        <div className='cart'>
           { cart.length > 0 ? (cart.map((cartItem, index) =>
               <div className='cartItem' key={index}>
                   <div className="cartItem_container1">
                        <img src={cartItem.pictureURL} alt={cartItem.title} />
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
                    <form>
                        <div className="form_data_container">
                            <div className='form_container1'>
                                <label>Nombre:</label>
                                <input type="text" name="name" value={name} onChange={handleChange} onBlur={handleBlur, checkFormValues} placeholder="Nombre" />
                                {error && <span className='errorMessage'>*Debes completar este campo para finalizar la orden de compra. </span>}

                                <label>Apellido:</label>
                                <input type="text" name="surname" value={surname} onChange={handleChange} onBlur={handleBlur, checkFormValues} placeholder="Apellido" />
                                {error && <span className='errorMessage'>*Debes completar este campo para finalizar la orden de compra. </span>}
                            </div>
                        
                            <div className='form_container2'>
                                <label>Teléfono:</label>
                                <input type="tel" name="phone" value={phone} onKeyDown={handleTel} onChange={handleChange} onBlur={handleBlur, checkFormValues} placeholder="(+5411)555-5555" />
                                {error && <span className='errorMessage'>*Tu teléfono debe tener un mínimo de 8 dígitos, sin guiones, paréntesis ni espacios. </span>}

                                <label>E-mail:</label>
                                <input type="email" name="email" value={email} onChange={handleChange} onBlur={handleBlur, checkFormValues} placeholder="example@example.com" />
                                {error && <span className='errorMessage'>*Debes completar este campo para finalizar la orden de compra. </span>}
                            </div>
                        </div>
                        <div className='form_button_container'>
                            <Link to={canBuy ? '/confirmation' : '/cart'}>
                                <button className='button button_primary' onClick={()=> createOrder(inputValues)} type="submit" disabled={[name, surname, phone, email].includes('') || phone.length < 8}>Comprar</button>
                            </Link>
                        </div>
                    </form>
                </Fragment>
            }
         </div>
    )

}