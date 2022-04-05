import { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import getAllPokemons from './services/getAllPokemons';

function App() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getAllPokemons()
      .then((response) => {
        setIsLoaded(true)
        setPokemons(response.data.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const list = pokemons.map((pokemon) => <Pokemon name={pokemon.name} key={pokemon.name} />)


  return (
    <div className="App">
      <header className='App-header'>
        { 
          isLoaded ? list : 'Cargando...'
        }
      </header>
    </div>
  );
}

export default App;
