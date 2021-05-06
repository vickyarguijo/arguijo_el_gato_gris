import './itemlistcontainer.css'
import {ItemList} from '../itemlist/itemlist'

export const ItemListContainer = (props) => {
    
    return (
        <div>
            <p className='greeting'>Hola!, {props.user.name} {props.user.lastName}</p>
            
            <ItemList />
        </div>
    )
    
}