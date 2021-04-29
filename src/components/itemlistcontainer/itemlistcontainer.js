import './itemlistcontainer.css'
import {ItemCount} from '../itemcount/itemcount'
import {ItemList} from '../itemlist/itemlist'

export const ItemListContainer = (props) => {
    
    return (
        <div>
            <p className='greeting'>Hola!, {props.user.name} {props.user.lastName}</p>
            <ItemCount stock="5" initial={1} />
            <ItemList />
        </div>
    )
    
}