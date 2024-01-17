export default function PokeCardSmall({pokemon, setPokemon}){

    function handleClick(){
        setPokemon()
    }

    if(!pokemon){
        return <></>
    }
/*
Da error al intentar renderizar PokeCardBig, creo que es debido a que al re-renderizar
cambia la variable y renderiza este objeto a la vez (no teniendo este objeto nada en pokemon, es decir el valor que tenía pre renderizado)
Creo que para arreglar esto hay que usar UseEffect para renderizar los componentes dependiendo del valor de ese estado (pokemon)
O preguntar
*/
    return(
        <>
            <div className="card col-4 ">
                <div className="card-img-top ">
                    <img src={pokemon.sprites.other["official-artwork"].front_default} className="pokeimg"></img>
                </div>
                <div className="card-body mx-auto">
                    <h5 className="card-title">{"#"+pokemon.id}</h5>
                    <p className="card-text">{pokemon.name}</p>
                    <p className="card-text">{pokemon.types.type[0].name}</p>
                    <button handleClick={handleClick}>Volver</button>
                </div>
            </div>
        </>
    )
        
}