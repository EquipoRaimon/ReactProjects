import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*import Form from './componentes/formulario.jsx'*/
import Cartas from './componentes/cartas.jsx'
import Navbar from './componentes/navbar.jsx'



function App() {
  const [pokemon, setPokemon] = useState([])
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
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Cartas pokemon={pokemon}></Cartas>
      </main>
    </div>
  )
}

export default App
