import './item.css'
import {Link} from 'react-router-dom'


export const Item = ({id, title, price, pictureURL}) => {

    return (
        <div className="item">
           
             <img src={pictureURL} />
             <div className="item_texts_container">
                <h4 className="item_title">{title}</h4>
                <p className="item_price">Precio: ${price}</p>
                <Link to={`/itemdetailcontainer/${id}`}><button className="button button_secondary">Ver detalles</button></Link>
             </div>
        </div>
        
    )
    
}