export default function PokeCardSmall({pokemon, setPokemon}){

    function handleOnClick(){
        setPokemon(pokemon)
    }

    return(
        <>

            <div className="card col-4 " onClick={handleOnClick}>
                <div className="card-img-top ">
                    <img src={pokemon.sprites.other["official-artwork"].front_default} className="pokeimg"></img>
                </div>
                <div className="card-body mx-auto">
                    <h5 className="card-title">{"#"+pokemon.id}</h5>
                    <p className="card-text">{pokemon.name}</p>
                </div>
            </div>
            
        </>
    )
}
