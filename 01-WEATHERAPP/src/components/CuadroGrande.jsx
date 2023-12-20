import imagenes from "../assets/imagenes";
import '../cuadroGrande.css'

export default function CuadroGrande() {
    return (
        <div class="cuadroGrande card bg-white bg-opacity-50 text-black">
            <div class="ciudad">
                <h3>CIUDAD, C</h3>
            </div>
            <div class="grados"> 
                <h4>GRADOS</h4>
            </div>
            <div>
                <img src={imagenes.img1} class="card-img" id="sol" alt=""></img>
            </div>
            <div class="TIEMPO"> 
                <h5>situacion(despejado/lluvia)</h5>
            </div>
        </div>
    )
}