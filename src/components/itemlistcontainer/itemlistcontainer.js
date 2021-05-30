import './itemlistcontainer.css'
import {ItemList} from '../itemlist/itemlist'

export const ItemListContainer = () => {
    
    return (
        <div className="itemListContainer">
            <h1 className='main_headline'>Encontrá todo lo que buscás para decorar tu casa con productos impresos en 3D.</h1>
            
            <ItemList />
        </div>
    )
    
}