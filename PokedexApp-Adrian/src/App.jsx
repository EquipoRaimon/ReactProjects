import { useState, useEffect } from 'react'
import './App.css'
import PokeCardSmall from './components/PokeCardSmall'

function App() {
  const [listaPokemon, setListaPokemon] = useState([]);

  useEffect(() => {
    const getListaPokemon = async () => {

      const url = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      const listaPokemonURL = await url.json()
      const { results } = listaPokemonURL
      
      const listaPokemonResultados = results.map( async (pokemon) => {
        const urlPokemon = await fetch(pokemon.url)
        const DatosPokemon = await urlPokemon.json()
        return DatosPokemon
      })

      setListaPokemon(await Promise.all(listaPokemonResultados))

    }
    getListaPokemon()
  }, [])

  return (
    <>
      {
      listaPokemon.map(function(pokemon){
        return(
        <PokeCardSmall pokemon={pokemon} key={pokemon.id}/>
        )
      })}

    </>
  )
}

export default App
