import imagenes from "../assets/imagenes";
import './navbar.css'



export default function Navbar() {
    return (
        <nav className="navbar bg-danger  rounded-1 mb-1">
            <div className="container-fluid">
                <a className="navbar-brand mx-auto">
                    <img src={imagenes.img2} className="w-25 card-img-top" />
                    <img src={imagenes.img1} className="w-50 card-img-top" />
                    <img src={imagenes.img2} className="w-25 card-img-top" />
                </a>
            </div>
            <form className="d-flex w-50 mx-auto" role="search">
                <input className="form-control me-2" type="search" placeholder="Busca un pokemon" aria-label="Search"></input>
                <button className="btn btn-dark" type="submit">Buscar</button>
            </form>
        </nav>
    )
}