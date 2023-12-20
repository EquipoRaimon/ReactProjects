import imagenes from "../assets/imagenes";
import '../cuadroGrande.css'

export default function CuadroPequeño() {
    return (
        <div class="cuadroConjunto card-group mt-4">
            <div class="card bg-white bg-opacity-50 me-4">
                <div class="ciudad">
                    <h3>LUNES</h3>
                </div>
                <div>
                    <img src={imagenes.img2} class="card-img-top" id="lluvia" alt="..."></img>
                </div>
                <div class="tiempo mt-4">
                    <h4>21º</h4>
                </div>
            </div>
            <div class="card bg-white bg-opacity-50 me-4">
                <div class="ciudad">
                    <h3>MARTES</h3>
                </div>
                <div>
                    <img src={imagenes.img2} class="card-img-top" id="lluvia" alt="..."></img>
                </div>
                <div class="tiempo mt-4">
                    <h4>18º</h4>
                </div>
            </div>
            <div class="card bg-white bg-opacity-50 me-4">
                <div class="ciudad">
                    <h3>MIÉRCOLES</h3>
                </div>
                <div>
                    <img src={imagenes.img2} class="card-img-top" id="lluvia" alt="..."></img>
                </div>
                <div class="tiempo mt-4">
                    <h4>20º</h4>
                </div>
            </div>
            <div class="card bg-white bg-opacity-50">
                <div class="ciudad">
                    <h3>JUEVES</h3>
                </div>
                <div>
                    <img src={imagenes.img2} class="card-img-top" id="lluvia" alt="..."></img>
                </div>
                <div class="tiempo mt-4">
                    <h4>23º</h4>
                </div>
            </div>
        </div>
    )
}