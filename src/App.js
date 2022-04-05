import './App.css';
import { useState } from 'react';

function App() {

  const [isCelsious, setIsCelsious] = useState(false)
  const [inputValue, setInputValue] = useState(0)

  const handlerOnChange = (e) => {
    setInputValue(Number(e.target.value))
  }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handlerOnChange} />
        <h1> {isCelsious ? inputValue : (inputValue * 9/5 )+ 32 } {
          isCelsious ? '°C' : '°F'
        }</h1>
        
        <button onClick={() => setIsCelsious(!isCelsious)}>Cambiar a {isCelsious? 'Fahrenheit' : 'Centigrados'}</button>
      </header>
    </div>
  );
}

export default App;
