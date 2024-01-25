import { useState, useEffect } from 'react'
import imagenes from "../assets/imagenes";
import './navbar.css'



export default function Navbar({setpokemito}) {
    const [pokemonBuscado, setPokemonBuscado] = useState();

     async function handleSubmit(){
        const responsePokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonBuscado)
        const responsePokemonJSON = await responsePokemon.json();
        await Promise.resolve(responsePokemonJSON).then(value => setpokemito(value))
    }

    return (
        <nav className="navbar bg-danger rounded-1 mb-1">
            <div className="container-fluid">
                <a className="navbar-brand mx-auto">
                    <img src={imagenes.img2} className="pp" />
                    <img src={imagenes.img1} className="w-50 card-img-top" />
                    <img src={imagenes.img2} className="pika pp" />
                </a>
            </div>
            <form className="d-flex w-75 mx-auto" role="search" onSubmit={(e) => {e.preventDefault();handleSubmit()}}>
                <input className="form-control me-2" type="search" placeholder="NOMBRE o ID" aria-label="Search" onChange={(e) => setPokemonBuscado(e.target.value)}></input>
                <button className="btn btn-dark" type="submit">Buscar</button>
            </form>
        </nav>
    )
}