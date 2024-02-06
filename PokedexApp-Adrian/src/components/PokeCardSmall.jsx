import PokeImage from './PokeImage'

export default function PokeCardSmall({ pokemon, setPokemon, shiny, setColor, mayuscula}){

    const color = pokemon.types[0].type.name

    function handleOnClick(){
        setPokemon(pokemon)
    }

    function mostrarTipos(){
        const tipos = []
        pokemon.types.map((poke)=>{
            tipos.push(poke.type.name)
        })
        return tipos.toString().replace(",",", ")
    }

    return(
        <>
        <div className='col-12 col-md-6 col-lg-4'>
            <div className="card pokeCardSmall" onClick={handleOnClick} style={setColor(color)} >
                    
                <div className="card-body mx-auto">
                    <PokeImage pokemon={pokemon} shiny={shiny}/>
                    <p className="card-text text-center "><span className='fw-bold'>{"#"+pokemon.id}</span> {mayuscula(pokemon.name)}</p>
                    <p className="card-text text-center ">{mayuscula(mostrarTipos())}</p>
                </div>

            </div>
        </div>
            
            
        </>
    )
}
