import './itemcount.css'

export const ItemCount = ({id, stock, quantity, title, pictureURL, price, onAdd, add, subtract, itemCountIsChildOf}) => {
    


    return (
        <div className="itemCount">
            <div className="itemQuantityContainer">
                <div className="operator" onClick={ () => subtract(quantity)}>-</div>
                <div className="quantity">{quantity}</div>
                <div className="operator" onClick={ () => add(quantity, stock)}>+</div>
            </div>
            {itemCountIsChildOf == "itemDetail" &&
                <button className="button button_primary margin_top_20" onClick={ () => onAdd(id, quantity, title, pictureURL, price, stock)}>Agregar al Carrito</button>
            }
        </div>
        
    )
    
}