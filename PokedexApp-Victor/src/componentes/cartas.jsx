import './carta.css'



export default function Cartas({pokemon, pokemito, setpokemito}) {
    if(pokemito){
        return <></>
    }

    function handleOnClick(poke){
        setpokemito(poke)
    }

    return (
        <div className="d-flex flex-wrap">
            {
                pokemon.map((poke) => {
                    return (
                        <div key={poke.id} className="card bg-white bg-opacity-75 px-0 carta" onClick={() => handleOnClick(poke)}>
                            <div className="card-img-top h-75 ">
                                <img className="h-100 w-75" src={poke.sprites.other.home.front_default}></img>
                            </div>
                            <div className="card-body">
                                <h5 className="texto card-title">{poke.id}</h5>
                                <p className="texto card-text">{poke.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}