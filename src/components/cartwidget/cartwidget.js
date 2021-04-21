import cartImg from '../../images/cart_small.png'
import './cartwidget.css'

export const CartWidget = () => {
    return (
        <div className='cartwidget'>
            <img src={cartImg} alt="Carrito de compras" />
        </div>
        
    )

}