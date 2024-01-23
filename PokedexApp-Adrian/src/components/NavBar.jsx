import { useState } from 'react'


export default function PokeCardSmall({setGeneracion, setPokemon, setShiny, shiny}){

    function cambiarGeneracion(e){
        setGeneracion(e.target.value)
        setPokemon()
      }
    async function handleSubmit(e){
        e.preventDefault()
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+buscarPokemon)
        if (respuesta.ok) {

            const respuestaJson = await respuesta.json()
            await Promise.resolve(respuestaJson).then(value => setPokemon(value))

        } else {
            console.error('No existe ese pokemon');
            //var myModal = document.getElementById('miModal')
        }
    }


    function cambiarShiny(){
        if (!shiny) {
            setShiny(1)

        } else {
            setShiny(0)

        }
    }


    const [buscarPokemon, setBuscarPokemon] = useState();

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container-fluid ">
                    <div className="navbar-brand">
                        <img src='../src/assets/pikachu.png' className="logo"/>
                    </div>
                    <span className="navbar-brand mb-0 h1">Pokedex</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link" value="1" onClick={cambiarGeneracion}>Nacional</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" value="2" onClick={cambiarGeneracion}>Kanto</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" value="3" onClick={cambiarGeneracion}>Johto</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" value="4" onClick={cambiarGeneracion}>Hoenn</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" value="5" onClick={cambiarGeneracion}>Sinnoh</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" value="8" onClick={cambiarGeneracion}>Unova</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" value="11" onClick={cambiarGeneracion}>Kalos</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" value="15" onClick={cambiarGeneracion}>Alola</button>
                            </li>
                        </div>

                        <input type="checkbox" className="btn-check" id="btn-check" autoComplete="off" onChange={cambiarShiny}/>
                        <label className="btn btn-outline-primary me-lg-2 mb-2 mb-lg-0" htmlFor="btn-check">Shiny</label>


                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Buscar nombre o Id" aria-label="Search" onChange={(e) => setBuscarPokemon(e.target.value)}/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
            
            {/*
                <div className="modal fade" id="miModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                        </div>
                    </div>
                </div>
            */}


        </>
    )
}