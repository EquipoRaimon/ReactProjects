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
  const [tipoFiltrado, setTipoFiltrado] = useState("all");

  const colores = {
    grass : {backgroundColor: '#49d0b0'},
    water : {backgroundColor: '#76befe'},
    fire : {backgroundColor: '#fa6d6b'}, 
    electric : {backgroundColor: '#F8D030'}, 
    normal : {backgroundColor: '#A8A77A'}, 
    poison : {backgroundColor: '#A33EA1'}, 
    bug : {backgroundColor: '#A6B91A'}, 
    fairy : {backgroundColor: '#D685AD'}, 
    flying : {backgroundColor: '#A98FF3'}, 
    ground : {backgroundColor: '#E2BF65'}, 
    rock : {backgroundColor: '#B6A136'}, 
    dark : {backgroundColor: '#705746'}, 
    ghost : {backgroundColor: '#735797'}, 
    dragon : {backgroundColor: '#6F35FC'}, 
    psychic : {backgroundColor: '#F95587'}, 
    ice : {backgroundColor: '#96D9D6'}, 
    fighting : {backgroundColor: '#C22E28'}, 
    steel : {backgroundColor: '#B7B7CE'},
    shadow : {backgroundColor: '#212F3D'}, 
    unknown : {backgroundColor: '#black'}
  }

  useEffect(() => {
    const getListaPokemon = async () => {

      const url = await fetch("https://pokeapi.co/api/v2/pokedex/" + generacion)
      const listaPokemonURL = await url.json()
      const { pokemon_entries } = listaPokemonURL

      /*
      pokemon_entries guarda el nombre del pokemon pero no sirve para hacer el fetch a https://pokeapi.co/api/v2/pokemon/ 
      directamente debido a que hay nombres de pokemon que se guardan con un sufijo Ej. deoxys es el nombre del pokemon
      y que se usa tanto en https://pokeapi.co/api/v2/pokemon-species/ como en el pokemon_entries, 
      deoxys-normal es el nombre que debería usar en https://pokeapi.co/api/v2/pokemon/
      Por lo tanto es mejor buscarlos por su id en la pokedex nacional ya que esa no cambia nunca
      */
     
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

    }
    getListaPokemon()
  }, [generacion])

  function setColor(color){
    return colores[color]
  }

  function mayuscula(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
  }

  return (
    <>
      <header className='sticky-top'>
        <NavBar setGeneracion={setGeneracion} setPokemon={setPokemon} setShiny={setShiny} shiny={shiny} setListaPokemon={setListaPokemon} setTipoFiltrado={setTipoFiltrado} generacion={generacion}></NavBar>
      </header>

      <main >
        <Loading listaPokemon={listaPokemon}></Loading>

        <PokeCardList listaPokemon={listaPokemon} pokemon={pokemon} setPokemon={setPokemon} shiny={shiny} value={pokemon} tipoFiltrado={tipoFiltrado} setColor={setColor} mayuscula={mayuscula}/>

        <PokeCardBig pokemon={pokemon} setPokemon={setPokemon} shiny={shiny} setColor={setColor} mayuscula={mayuscula}/>

      </main>

    </>
  )
}

export default App
