import {CartWidget} from '../cartwidget/cartwidget'
import logo from '../../images/logo.png'
import './navbar.css'

export const Navbar = () => {
    return (
        <header className='header'>
            <div className='logoContainer'>
                <img className='logo' src={logo} alt="El Gato Gris Logo" />
                <p>El Gato Gris</p>
            </div>
            <nav>
                <ul className='nav'>
                    <li className='navItem'><a href="#">Home</a></li>
                    <li className='navItem'><a href="#">Productos</a></li>
                    <li className='navItem'><a href="#">Preguntas Frecuentes</a></li>
                    <li className='navItem'><a href="#">Contacto</a></li>
                </ul>
            </nav>
            
            <CartWidget />
           
        </header>
        
    )

}