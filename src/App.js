import {Navbar} from './components/navbar/navbar'
import {ItemListContainer} from './components/itemlistcontainer/itemlistcontainer'
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
    </div>
  );
}

export default App;
