import './itemlistcontainer.css'
import {ItemCount} from '../itemcount/itemcount'

export const ItemListContainer = (props) => {
    
    return (
        <div>
            <p className='greeting'>Hola!, {props.user.name} {props.user.lastName}</p>
            <ItemCount stock="5" initial={1} />
        </div>
    )
    
}