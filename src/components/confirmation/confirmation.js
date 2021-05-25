import './confirmation.css'
import {useContext} from 'react'
import {CartContext} from '../context/cartcontext'

export const Confirmation = () => {

    const {orderId} = useContext(CartContext);

    return (
        <div className="confirmation">
           
             <h4>Recibimos tu orden!</h4>
             <p>Nos contactaremos a la brevedad para acordar el envío y forma de pago.</p>
             <p>Número de orden de compra: {orderId}</p>
        </div>
        
    )
    
}