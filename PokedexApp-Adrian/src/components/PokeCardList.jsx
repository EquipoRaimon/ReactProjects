import PokeCardSmall from './PokeCardSmall'

export default function PokeCardList({listaPokemon, pokemon, setPokemon, shiny}){

  if(pokemon){
    return <></>
  }

  return(
    <div className='d-flex flex-wrap my-2 '>
      {
        listaPokemon.map((poke) => {
          if(poke.sprites.other["official-artwork"].front_default == null){
            return(
              <></>
            )
          }
          return(
            
            <PokeCardSmall pokemon={poke} key={poke.id} setPokemon={setPokemon} PokemonSeleccionado={pokemon} shiny={shiny}/>

          )
        })
      }
    </div>
  )
    
}