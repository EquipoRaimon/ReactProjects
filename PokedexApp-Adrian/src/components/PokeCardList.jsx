import PokeCardSmall from './PokeCardSmall'

export default function PokeCardList({listaPokemon, pokemon, setPokemon}){

  if(pokemon){
    return <></>
  }

  return(
    <div className='d-flex flex-wrap '>
      {
        listaPokemon.map((poke) => {
          if(poke.sprites.other["official-artwork"].front_default == null){
            return(
              <></>
            )
          }
          return(
            
            <PokeCardSmall pokemon={poke} key={poke.id} setPokemon={setPokemon} PokemonSeleccionado={pokemon} />

          )
        })
      }
    </div>
  )
    
}