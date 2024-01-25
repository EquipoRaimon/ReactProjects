import './carta.css'

export default function CartaSolitaria({ pokemito, setPokemito}) {
    if (!pokemito) {
        return <></>
    }

    return (
        <div className="d-flex flex-wrap">
            <div className="card bg-white bg-opacity-75 px-0 carta mx-auto ">
                <div className="card-img-top h-75 ">
                    <img className="h-100 w-75" src={pokemito.sprites.other.home.front_default}></img>
                </div>
                <div className="card-body">
                    <h5 className="texto card-title">{pokemito.id}</h5>
                    <p className="texto card-text">{pokemito.name}</p>
                </div>
            </div>
        </div>
    )
}