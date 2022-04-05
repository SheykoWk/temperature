import './App.css';
import useCounter from './hooks/useCounter';
import useRandomNumber from './hooks/useRandomNumber';

function App() {

  const [counter, increment] = useCounter()

  const [random, setRandom] = useRandomNumber(50)

  return (
    <div className="App">
      <header className='App-header'>
        <h1> {counter} </h1>
        <button onClick={increment}>Increment</button>

        <h1> {random} </h1>
        <button onClick={() => setRandom(10)}>Cambiar numerp</button>
      </header>
    </div>
  );
}

export default App;
