import {NavLink, Link} from 'react-router-dom'
import {CartWidget} from '../cartwidget/cartwidget'
import logo from '../../images/logo.png'
import './navbar.css'

export const Navbar = () => {
    return (
        <header className='header'>
            <Link exact to="/" className='logoContainer'>
                <div className='logoContainer'>
                    <img className='logo' src={logo} alt="El Gato Gris Logo" />
                    <p className="brandName">El Gato Gris</p>
                </div>
            </Link>
            <nav>
                <ul className='nav'>
                    <li className='navItem'><NavLink exact to={'/'} activeClassName="nav_active" className="nav_inactive">Home</NavLink></li>
                    <li className='navItem'><NavLink exact to={'/category/ofertas'} activeClassName="nav_active" className="nav_inactive">Ofertas</NavLink></li>
                    <li className='navItem'><NavLink exact to={'/category/catlovers'} activeClassName="nav_active" className="nav_inactive">Cat Lovers</NavLink></li>
                </ul>
            </nav>
            
            <CartWidget />
           
        </header>
        
    )

}