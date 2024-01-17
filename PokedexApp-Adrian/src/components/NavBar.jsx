export default function PokeCardSmall({setGeneracion}){

    function cambiarGeneracion(e){
        setGeneracion(e.target.value)
      }

    return(
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src='../src/assets/pikachu.png' className="logo"/>
                </a>
                <a className="navbar-brand" href="#">Pokedex</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
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
                    </ul>
                </div>
            </nav>
        </>
    )
}
