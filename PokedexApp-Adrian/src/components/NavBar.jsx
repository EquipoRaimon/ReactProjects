import { useState } from 'react'


export default function PokeCardSmall({ setGeneracion, setPokemon, setShiny, shiny, setListaPokemon, setTipoFiltrado, generacion }) {

    const [buscarPokemon, setBuscarPokemon] = useState();

    const tipos = ["all", "grass", "water", "fire", "electric", "normal", "poison", "bug", "fairy", "flying", "ground", "rock", "dark", "ghost", "dragon", "psychic", "ice", "fighting", "steel"]

    function cambiarGeneracion(e) {
        if (generacion != e.target.value) {
            setGeneracion(e.target.value)
            setListaPokemon([])
        }
        setPokemon()

    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (buscarPokemon == "") {
            setTipoFiltrado("all")
            setPokemon()
            return
        }
        const Auxpoke = buscarPokemon.toLowerCase()
        if (tipos.includes(Auxpoke)) {
            setTipoFiltrado(Auxpoke)
            setPokemon()
        } else {
            const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + Auxpoke)
            if (respuesta.ok) {

                const respuestaJson = await respuesta.json()
                await Promise.resolve(respuestaJson).then(value => setPokemon(value))

            } else {
                console.error('No existe ese pokemon');
            }
        }
    }

    function cambiarShiny() {
        if (!shiny) {
            setShiny(1)

        } else {
            setShiny(0)

        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
                <div className="container-fluid ">
                    <div className="navbar-brand">
                        <a href="index.html "><img src='/pikachu.png' className="logo" /></a>
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

                        <input type="checkbox" className="btn-check" id="btn-check" autoComplete="off" onChange={cambiarShiny} />
                        <label className="btn btn-outline-primary me-lg-2 mb-2 mb-lg-0" htmlFor="btn-check">Shiny</label>


                        <form className="d-flex" role="search" onSubmit={handleSubmit} id="formPokemon">
                            <input className="form-control me-2" type="search" id="inputPokemon" placeholder="Enter name, type or id" aria-label="Search" onChange={(e) => setBuscarPokemon(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}
