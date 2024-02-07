import {useState} from 'react'
import imagenes from '../assets/imagenes'
import './carta.css'
import Estadisticas from './estadisticas'

export default function CartaSolitaria({ pokemito, setpokemito }) {
const [valor, setValor] = useState(1)

    if (!pokemito) {
        return <></>
    }

    function handleOnClick() {
        setpokemito()
    }

    function cambiar(e){
        if(valor != e.target.value){
            setValor(e.target.value)
        }
    }

    function coloresPokemon(pokemito) {
        const types = pokemito.types
        const color = types[0].type.name
        const colorPokemon = {
            normal: { backgroundColor: '#A8A878' },
            fighting: { backgroundColor: '#C03028' },
            flying: { backgroundColor: '#A890F0' },
            poison: { backgroundColor: '#A040A0' },
            ground: { backgroundColor: '#E0C068' },
            rock: { backgroundColor: '#B8A038' },
            bug: { backgroundColor: '#A8B820' },
            ghost: { backgroundColor: '#705898' },
            fire: { backgroundColor: '#FF3D3D' },
            water: { backgroundColor: '#6890F0' },
            grass: { backgroundColor: '#59DE39' },
            electric: { backgroundColor: '#FFFB00' },
            psychic: { backgroundColor: '#F85888' },
            ice: { backgroundColor: '#98D8D8' },
            dragon: { backgroundColor: '#7038F8' },
            fairy : {backgroundColor: '#FFAAEE'}
        }
        return colorPokemon[color]
    }

    return (
        <div >
            <div>
                <button type='button' className="w-25 bg-transparent border-0" onClick={() => handleOnClick()}>
                    <img src={imagenes.img5} className='w-25 atras' />
                </button>
            </div>
            <div className="d-flex flex-row">
                <div className="card cartaSola d-flex w-50" style={coloresPokemon(pokemito)}>
                    <div className=" h-75 ">
                        <img className="h-100 w-75" src={pokemito.sprites.other.home.front_default}></img>
                    </div>
                    <div className="card-body">
                        <h5 className="texto card-title">{pokemito.id}</h5>
                        <p className="texto card-text">{pokemito.name}</p>
                    </div>
                </div>
                <div className='card mx-auto w-100 bg-light-subtle'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand font-weight-bold" href="#">ESTADISTICAS</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <button className="nav-link" value="1" onClick={(e) => cambiar(e)}>ABOUT</button>
                                    <button className="nav-link" value="2" onClick={(e) => cambiar(e)}>BASE STATS</button>
                                    <button className="nav-link" value="3" onClick={(e) => cambiar(e)}>EVOLUTIONS</button>
                                    <button className="nav-link" value="4" onClick={(e) => cambiar(e)}>MOVES</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Estadisticas valor={valor} pokemito={pokemito}/>
                </div>
            </div>
        </div>

    )
}