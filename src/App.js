import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from './components/navbar/navbar'
import {Footer} from './components/footer/footer'
import {ItemListContainer} from './components/itemlistcontainer/itemlistcontainer'
import {ItemDetailContainer} from './components/itemdetailcontainer/itemdetailcontainer'
import {Cart} from './components/cart/cart'
import {Confirmation} from './components/confirmation/confirmation'
import {CartProvider} from './components/context/cartcontext'
import './App.css';


function App() {

  const userData = {
    name: 'Vicky',
    lastName: 'Arguijo',
  }

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="wrapper">
          <Navbar />
          <Switch>
          
              <Route exact path="/">
                <ItemListContainer user={userData} />
              </Route>
              <Route exact path="/category/:categoryId">
                <ItemListContainer user={userData} />
              </Route>
              <Route exact path="/item/:itemId">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/itemdetailcontainer/:id">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route path="/confirmation">
                <Confirmation />
              </Route>
          </Switch>
        </div>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
