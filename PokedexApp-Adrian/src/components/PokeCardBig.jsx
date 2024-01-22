import PokeImage from './PokeImage'

export default function PokeCardSmall({pokemon, setPokemon, shiny}){

    function handleClick(){
        setPokemon()
    }

    if(!pokemon){
        return <></>
    }

    return(
        <>
            <div className="card w-50 mx-auto" id="PokeCardBig">
                <div className="mx-auto">
                    
                    <PokeImage pokemon={pokemon} shiny={shiny}/>
                    
                </div>
                <div className="card-body mx-auto">
                    <h5 className="card-title">{"#"+pokemon.id}</h5>
                    <p className="card-text">{pokemon.name}</p>
                    {
                        pokemon.types.map((poke)=>{
                            <p>{poke.type.name}</p>
                        })
                    }
                    <button onClick={handleClick}>Volver</button>
                </div>
            </div>
        </>
    )
        
}