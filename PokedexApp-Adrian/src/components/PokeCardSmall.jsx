import PokeImage from './PokeImage'

export default function PokeCardSmall({pokemon, setPokemon, shiny}){

    function handleOnClick(){
        setPokemon(pokemon)
    }

    return(
        <>

            <div className="card col-4 " onClick={handleOnClick}>
                <div className=" mx-auto">
                    
                    <PokeImage pokemon={pokemon} shiny={shiny}/>

                </div>
                <div className="card-body mx-auto">
                    <h5 className="card-title">{"#"+pokemon.id}</h5>
                    <p className="card-text">{pokemon.name}</p>
                </div>
            </div>
            
        </>
    )
}
