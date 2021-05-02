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
    <div className="App">
      <Navbar />
      <ItemListContainer user={userData} />
      <ItemDetailContainer item={userData} />
    </div>
  );
}

export default App;
