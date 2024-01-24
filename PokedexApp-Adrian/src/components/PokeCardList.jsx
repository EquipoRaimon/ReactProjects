import PokeCardSmall from './PokeCardSmall'

export default function PokeCardList({listaPokemon, pokemon, setPokemon, shiny}){

  if(pokemon){
    return <></>
  }

  return(
    <div className=' mt-1 row g-3 '>
      {
        listaPokemon.map((poke) => {
          return(

            <PokeCardSmall pokemon={poke} key={poke.id} setPokemon={setPokemon} PokemonSeleccionado={pokemon} shiny={shiny}/>

          )
        })
      }
    </div>
  )
    
}