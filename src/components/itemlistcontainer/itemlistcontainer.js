import './itemlistcontainer.css'

export const ItemListContainer = (props) => {
    
    return (
        <p className='greeting'>Hola!, {props.user.name} {props.user.lastName}</p>
        
    )
    
}