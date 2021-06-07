import './confirmation.css'
import cat_in_box from '../../images/cat_in_box.png'
import {useContext} from 'react'
import {CartContext} from '../context/cartcontext'

export const Confirmation = () => {

    const {orderId} = useContext(CartContext);

    return (
        <div className="confirmation">
            <h4 className="confirmation_headline">¡Gracias por tu compra!</h4>
            <img src={cat_in_box} alt="imagen de gato en una caja" />
            
            <p className="confirmation_text">Nos contactaremos a la brevedad para acordar el envío y forma de pago.</p>
            <p className="confirmation_text"> Tené a mano tu código de compra que aparece a continuación.</p>
            <p className="confirmation_orderId_text">Tu código de compra: <span className="confirmation_orderId">{orderId}</span></p>

             <p className="confirmation_text">¡Ya falta muy poco para que disfrutes de tu compra!</p>
            
        </div>
        
    )
    
}