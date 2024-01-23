import { useState, useEffect } from 'react'

import NavBar from './components/NavBar'
import PokeCardBig from './components/PokeCardBig'
import PokeCardList from './components/PokeCardList';
import Loading from './components/Loading';

function App() {
  const [listaPokemon, setListaPokemon] = useState([]);
  const [generacion, setGeneracion] = useState(2);
  const [pokemon, setPokemon] = useState();
  const [shiny, setShiny] = useState(0);

  useEffect(() => {
    const getListaPokemon = async () => {

      const url = await fetch("https://pokeapi.co/api/v2/pokedex/" + generacion)
      const listaPokemonURL = await url.json()
      const { pokemon_entries } = listaPokemonURL


      const listaPokemonResultados = pokemon_entries.map(async (pokemon) => {
        const auxPokemon = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + pokemon.pokemon_species.name)
        const dataAuxPokemon = await auxPokemon.json()
        const urlPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + dataAuxPokemon.id)
        const DatosPokemon = await urlPokemon.json()
        return DatosPokemon

      })

      const listaPokemonFulfilled = await Promise.allSettled(listaPokemonResultados).then(results => results.map((result) => {
        if (result.status == "fulfilled") {
          return result.value
        }
      }))
      setListaPokemon(listaPokemonFulfilled)
      console.log(listaPokemonFulfilled)
    }
    getListaPokemon()
  }, [generacion])

  return (
    <>
      <header>
        <NavBar setGeneracion={setGeneracion} setPokemon={setPokemon} setShiny={setShiny} shiny={shiny}></NavBar>
      </header>

      <main >
        <Loading listaPokemon={listaPokemon}></Loading>
        <PokeCardList listaPokemon={listaPokemon} pokemon={pokemon} setPokemon={setPokemon} shiny={shiny} value={pokemon} />
        <PokeCardBig pokemon={pokemon} setPokemon={setPokemon} shiny={shiny} />

      </main>

    </>
  )
}

export default App
