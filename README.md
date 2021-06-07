# El Gato Gris Tienda Online

Mi proyecto consiste en una tienda de artículos varios impresos en 3D. La tienda se llama "El Gato Gris" y cuenta con una sección llamada "Cat Lovers" donde se mostrarán todos los productos relacionados con gatos. También tiene una sección aparte para los productos en oferta. El catálogo completo se mostrará en el home. 

#### Este es el proyecto final del curso de React Js de CoderHouse 2021.
----------------------------------------------------

## Estructura del proyecto:

### `App`

Contiene la navegación de todo el sitio, para la cual se utiliza react-router-dom.

### `NavBar`

Header del sitio. Contiene isologo con link al home, navbar con links a categorías y cartWidget indicando la cantidad de productos en el carrito.

### `ItemListContainer & ItemDetailContainer`

Componentes contenedores de los componentes itemList y itemDetail. Ambos contienen la lógica para el funcionamiento de sus children.

### `ItemList`

Trae de FireStore los componentes filtrados según su categoría, ofertas o CatLovers. El home mostrará todos los productos, tengan o no categoría declarada en Firebase.

### `Item`

Vista de cada ítem de itemList.

### `ItemDetail`

Vista del detalle de un ítem en particular. Contiene el componente itemCount para agregar al carrito, y redirige al carrito para finalizar la compra. Contiene la lógica para itemCount cuando es hijo de itemDetail -funciones para sumar y restar ítems, y botón para agregar al carrito-. Contiene a itemCount

### `ItemCount`

Vista del contador para sumar y restar productos al carrito. Botón de "Agregar al Carrito" con render condicional (solo si está en itemDetail). Su lógica de funcionamiento la recibe de itemDetail y de cart (que a su vez la recibe del context).

### `Context`

CartContext contiene la lógica para el funcionamiento del carrito, funciones para agregar y quitar productos, vaciar carrito, y creación de la orden de compra con los datos del usuario.

### `Cart`

Vista del carrito con los productos agregados. Formulario para ingresar los datos del usuario. Funciones de validación del formulario. Redirige a la pantalla final de confirmación de compra. Contiene a itemCount 

### `Confirmation`

Pantalla final del proceso de compra, muestra el ID de la orden de compra generada en FireBase.

### `CartWidget`

Ícono del carrito. En caso de haber productos agregados, muestra la cantidad total. Está incluido dentro de NavBar. Link al carrito de compras.

### `Footer`

Footer general del sitio con datos de contacto. 

## Muchas gracias por llegar hasta acá y espero les guste mi proyecto!!

#### Victoria Arguijo - 2021
