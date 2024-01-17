export default function PokeCardSmall({pokemon}){

    return(
        <>
            <div className="card col-4 ">
                <div className="card-img-top ">
                    <img src={pokemon.sprites.other["official-artwork"].front_default} className=""></img>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{"#"+pokemon.id}</h5>
                    <p className="card-text">{pokemon.name}</p>
                </div>
            </div>
        </>
    )
}
