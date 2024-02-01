import PokeImage from './PokeImage'
import PokeDatos from './PokeDatos'
import PokeStats from './PokeStats'
import PokeMoves from './PokeMoves'
import PokeEvo from './PokeEvo'

export default function PokeCardSmall({ pokemon, setPokemon, shiny, setColor, mayuscula }){

    if(!pokemon){
        return <></>
    }
    
    function handleClick(){
        setPokemon()
    }

    const color = pokemon.types[0].type.name

    function mostrarTipos(){
        const tipos = []
        pokemon.types.map((poke)=>{
            tipos.push(poke.type.name)
        })
        return tipos.toString().replace(",",", ")
    }

    return(
        <>
            <div className="card col-12 col-md-8 mx-auto mt-3 pb-3" style={setColor(color)}>

                <button type="button" className="btn-close ms-3 mt-3 btn btn-lg " aria-label="Close" onClick={handleClick}></button>

                <div className="mx-auto">
                    
                    <PokeImage pokemon={pokemon} shiny={shiny}/>
                    <p className="card-text text-center "><span className='fw-bold'>{"#"+pokemon.id}</span> {mayuscula(pokemon.name)}</p>
                    <p className="card-text text-center ">{mayuscula(mostrarTipos())}</p>
                </div>
                
                <div className='px-3 pt-3 '>
                    <ul className="nav nav-tabs nav-fill bg-dark rounded-top-2 " id="myTab" role="tablist" data-bs-theme="dark">
                        <li className="nav-item " role="presentation">
                            <button className="nav-link" id="about-tab" data-bs-toggle="tab" data-bs-target="#poke-about" type="button" role="tab" aria-controls="poke-about" aria-selected="true">About</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="stats-tab" data-bs-toggle="tab" data-bs-target="#poke-stats" type="button" role="tab" aria-controls="poke-stats" aria-selected="false">Base stats</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="evo-tab" data-bs-toggle="tab" data-bs-target="#poke-evo" type="button" role="tab" aria-controls="poke-evo" aria-selected="false">Evolution</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="moves-tab" data-bs-toggle="tab" data-bs-target="#poke-moves" type="button" role="tab" aria-controls="poke-moves" aria-selected="false">Moves</button>
                        </li>
                    </ul>
                    <div className="tab-content bg-light-subtle rounded-bottom-2  pb-1" id="nav-tabContent">
                        <div className="tab-pane fade" id="poke-about" role="tabpanel" aria-labelledby="about-tab" tabIndex="0">
                            <PokeDatos pokemon={pokemon} mayuscula={mayuscula}/>
                        </div>
                        <div className="tab-pane fade" id="poke-stats" role="tabpanel" aria-labelledby="stats-tab" tabIndex="0">
                            <PokeStats pokemon={pokemon} mayuscula={mayuscula} />
                        </div>
                        <div className="tab-pane fade" id="poke-evo" role="tabpanel" aria-labelledby="evo-tab" tabIndex="0">
                            <PokeEvo pokemon={pokemon} shiny={shiny}/>
                        </div>
                        <div className="tab-pane fade" id="poke-moves" role="tabpanel" aria-labelledby="moves-tab" tabIndex="0">
                            <PokeMoves pokemon={pokemon} />
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
        
}