export default function Cartas({pokemon }) {
    return (
        <div className="row row-cols-6">
            {
                pokemon.map((poke) => {
                    return (
                        <div className="card bg-white">
                            <div className="card-img-top h-75">
                                <img className="h-100 w-50" src={poke.sprites.other.dream_world.front_default}></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{poke.id}</h5>
                                <p className="card-text">{poke.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}