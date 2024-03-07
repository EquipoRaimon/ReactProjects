import PokeCardSmall from './PokeCardSmall'

export default function PokeCardList({ listaPokemon, pokemon, setPokemon, shiny, tipoFiltrado, setColor, mayuscula }) {

  if (pokemon) {
    return null
  }

  function conseguirTipos(pokemon) {
    const tipos = []
    pokemon.types.map((poke) => {
      tipos.push(poke.type.name)
    })
    return tipos
  }

  //Devuelve esto si no se filtran los pokemon
  if (tipoFiltrado == "all") {
    return (
      <div className=' mt-1 mb-3 row g-3 '>
        {
          listaPokemon.map((poke) => {
            return (

              <PokeCardSmall pokemon={poke} key={poke.id} setPokemon={setPokemon} PokemonSeleccionado={pokemon} shiny={shiny} setColor={setColor} mayuscula={mayuscula} />

            )
          })
        }
      </div>
    )
  }

  //Devuelve esto si se filtra por un tipo
  return (
    <div className=' mt-1 mb-3 row g-3 '>
      {
        listaPokemon.map((poke) => {
          const tipos = conseguirTipos(poke)
          if (tipos.includes(tipoFiltrado)) {
            return (
              <PokeCardSmall pokemon={poke} key={poke.id} setPokemon={setPokemon} PokemonSeleccionado={pokemon} shiny={shiny} setColor={setColor} mayuscula={mayuscula} />
            )
          }
        })
      }
    </div>
  )

}