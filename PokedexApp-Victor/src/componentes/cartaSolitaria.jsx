import { useState } from 'react'
import imagenes from '../assets/imagenes'
import './carta.css'
import Estadisticas from './estadisticas'

export default function CartaSolitaria({ pokemito, setpokemito, ubi, setubi, evo, setevo}) {
    const [valor, setValor] = useState(1)

    if (!pokemito) {
        return <></>
    }

    function handleOnClick() {
        setpokemito()
    }

    function cambiar(e) {
        if (valor != e.target.value) {
            setValor(e.target.value)
        }
    }

    return (
        <div>
            <div>
                <button type='button' className="w-25 sm bg-transparent border-0 " onClick={() => handleOnClick()}>
                    <img src={imagenes.img5} className='w-25 atras' />
                </button>
            </div>
            <div className="d-flex flex-row">

                <div className="card cartaSola d-flex w-100 mx-auto bg-opacity-75 bg-light ">

                    <div className="h-50">
                        <img className="h-100 w-25 " src={pokemito.sprites.other.home.front_default}></img>
                    </div>
                    <div className="card-body">
                        <h5 className="texto card-title">{pokemito.id}</h5>
                        <p className="texto card-text">{pokemito.name}</p>
                    </div>
                    <div className='card mx-auto w-100 bg-light-subtle'>
                        <nav className="navbar navbar-expand-lg navbar-light bg">
                            <div className="container-fluid">
                                <a className="navbar-brand font-weight-bold" href="#">ESTADISTICAS</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        {/*Doy un valor a cada apartado del navbar para que me muestre una información distinta en cada apartado*/}
                                        <button className="nav-link" value="1" onClick={(e) => cambiar(e)}>ABOUT</button>
                                        <button className="nav-link" value="2" onClick={(e) => cambiar(e)}>BASE STATS</button>
                                        <button className="nav-link" value="3" onClick={(e) => cambiar(e)}>EVOLUTIONS</button>
                                        <button className="nav-link" value="4" onClick={(e) => cambiar(e)}>MOVES</button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <Estadisticas valor={valor} pokemito={pokemito} ubi={ubi} setubi={setubi} evo={evo} setevo={setevo} />
                    </div>
                </div>
            </div>
        </div>

    )
}