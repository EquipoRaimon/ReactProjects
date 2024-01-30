import PokeCardSmall from './PokeCardSmall'

export default function PokeCardList({listaPokemon, pokemon, setPokemon, shiny, tipoFiltrado, setColor, mayuscula}){

  if(pokemon){
    return <></>
  }

  function conseguirTipos(pokemon){
    const tipos = []
        pokemon.types.map((poke)=>{
            tipos.push(poke.type.name)
        })
        return tipos
  }

  if (tipoFiltrado == "all") {
    return(
      <div className=' mt-1 row g-3 '>
        {
          listaPokemon.map((poke) => {
            return(
  
              <PokeCardSmall pokemon={poke} key={poke.id} setPokemon={setPokemon} PokemonSeleccionado={pokemon} shiny={shiny} setColor={setColor} mayuscula={mayuscula}/>
  
            )
          })
        }
      </div>
    )
  }


  return(
    <div className=' mt-1 row g-3 '>
      {
        listaPokemon.map((poke) => {
          const tipos = conseguirTipos(poke)
          if(tipos.includes(tipoFiltrado)){
            return(
              <PokeCardSmall pokemon={poke} key={poke.id} setPokemon={setPokemon} PokemonSeleccionado={pokemon} shiny={shiny} setColor={setColor} mayuscula={mayuscula}/>
            )
          }
        })
      }
    </div>
  )
    
}