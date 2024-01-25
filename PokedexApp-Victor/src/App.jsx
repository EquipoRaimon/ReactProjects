import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*import Form from './componentes/formulario.jsx'*/
import Cartas from './componentes/cartas.jsx'
import CartaSolitaria from './componentes/cartaSolitaria.jsx'
import Navbar from './componentes/navbar.jsx'



function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemito, setpokemito] = useState()

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
    <div className='body'>
      <Navbar></Navbar>
      <main>
        <Cartas pokemon={pokemon} pokemito={pokemito} setpokemito={setpokemito}></Cartas>
        <CartaSolitaria pokemito={pokemito} setpokemito={setpokemito}></CartaSolitaria>
      </main>
    </div>
  )
}

export default App
