import { useState, useEffect } from 'react'
import './App.css'
import Cartas from './componentes/cartas.jsx'
import CartaSolitaria from './componentes/cartaSolitaria.jsx'
import Navbar from './componentes/navbar.jsx'



function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemito, setpokemito] = useState()
  const [pokemonBuscado, setPokemonBuscado] = useState();
  const [ubi, setubi] = useState('');
  const [evo, setevo] = useState([]);

  //Para obtener información sobre los primeros 151 Pokémon de la API y almacenarlos en el estado
  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      const listaDePokemon = await response.json()
      const { results } = listaDePokemon

      const newPokemon = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const poke = await response.json()
        return poke

      })
      setPokemon(await Promise.all(newPokemon));
    }
    getPokemon()
  }, [])

  
  return (
    <>
      <header className='sticky-top'>
        <Navbar setpokemito={setpokemito} pokemonBuscado={pokemonBuscado} setPokemonBuscado={setPokemonBuscado}></Navbar>
      </header>
      <main>
        <Cartas pokemon={pokemon} pokemito={pokemito} setpokemito={setpokemito}></Cartas>
        <CartaSolitaria pokemito={pokemito} setpokemito={setpokemito} ubi={ubi} setubi={setubi} evo={evo} setevo={setevo}></CartaSolitaria>
      </main>
    </>
  )
}

export default App
