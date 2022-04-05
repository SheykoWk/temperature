import './App.css';
import { useState } from 'react';
import Menu from './components/Menu';


function App() {

  const [displayMenu, setDisplayMenu] = useState(true)
  const [backgroundColor, setBackgroundColor] = useState(false)


  return (
    <div className="App">
      <header className={`App-header ${backgroundColor? 'background' : ''}`}>
        { displayMenu ? <Menu /> : null }
        <button onClick={() => setDisplayMenu(!displayMenu)} >Menu</button>
        <button onClick={() => setBackgroundColor(!backgroundColor)}>Cambiar fondo</button>
      </header>
    </div>
  );
}

export default App;
