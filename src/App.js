import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from './components/navbar/navbar'
import {ItemListContainer} from './components/itemlistcontainer/itemlistcontainer'
import {ItemDetailContainer} from './components/itemdetailcontainer/itemdetailcontainer'
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
        <Navbar />
        <Switch>
          <main className='app'>
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

          </main>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
