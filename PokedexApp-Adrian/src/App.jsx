import { useState, useEffect } from 'react'

import NavBar from './components/NavBar'
import PokeCardBig from './components/PokeCardBig'
import PokeCardList from './components/PokeCardList';
import Loading from './components/Loading';

function App() {
  const [listaPokemon, setListaPokemon] = useState([]);
  const [generacion, setGeneracion] = useState(2);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getListaPokemon = async () => {

      const url = await fetch("https://pokeapi.co/api/v2/pokedex/"+generacion)
      const listaPokemonURL = await url.json()
      const { pokemon_entries } = listaPokemonURL

      
      const listaPokemonResultados = pokemon_entries.map( async (pokemon) => {
        const auxPokemon = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+pokemon.pokemon_species.name)
        const dataAuxPokemon=await auxPokemon.json()
        const urlPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/"+dataAuxPokemon.id)
        const DatosPokemon = await urlPokemon.json()
        return DatosPokemon
        
      })
  
      const listaPokemonFulfilled = await Promise.allSettled(listaPokemonResultados).then(results => results.map((result) => {
        if(result.status == "fulfilled"){
          return result.value          
        }
      }))
      setListaPokemon(listaPokemonFulfilled)
      console.log(listaPokemonFulfilled)
    }
    getListaPokemon()
  }, [generacion])

  function handleClick(){

  }

  return (
    <>

      <NavBar setGeneracion={setGeneracion}></NavBar>
      <Loading listaPokemon={listaPokemon}></Loading>
      <main className='mx-auto'>
        <PokeCardList listaPokemon={listaPokemon} pokemon={pokemon} handleClick={handleClick}/>

      </main>
      

    </>
  )
}

export default App
