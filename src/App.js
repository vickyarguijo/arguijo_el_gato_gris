import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from './components/navbar/navbar'
import {ItemListContainer} from './components/itemlistcontainer/itemlistcontainer'
import {ItemDetailContainer} from './components/itemdetailcontainer/itemdetailcontainer'
import './App.css';


function App() {

  const userData = {
    name: 'Vicky',
    lastName: 'Arguijo',
  }

  return (
    <BrowserRouter>
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
              <ItemListContainer user={userData} />
            </Route>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
