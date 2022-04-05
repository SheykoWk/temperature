import axios from "axios"

const URL = 'https://pokeapi.co/api/v2/pokemon'

const getAllPokemons = async () => {
    const req = await axios.get(URL)
    return req
}

//! const getPokemonsWithFetch = async () => {
//!     const req = await fetch(URL)
//!     return req
//! }

//! getPokemonsWithFetch()
//!     .then((response) => response.json())
//!     .then((response) => console.log(response))


export default getAllPokemons