import imagenes from "../assets/imagenes";
import '../cuadroGrande.css'

export default function CuadroPequeño() {
    return (
        <div class="card-group">
            <div class="card bg-white bg-opacity-50">
                <div class="ciudad">
                    <h3>DIA DE LA SEMANA</h3>
                </div>
                <div>
                    <img src={imagenes.img2} class="card-img-top" id="lluvia" alt="..."></img>
                </div>
                <div class="tiempo">
                    <h5>situacion(despejado/lluvia)</h5>
                </div>
            </div>
            <div class="card bg-white bg-opacity-50">
                <div class="ciudad">
                    <h3>DIA DE LA SEMANA</h3>
                </div>
                <div>
                    <img src={imagenes.img2} class="card-img-top" id="lluvia" alt="..."></img>
                </div>
                <div class="tiempo">
                    <h5>situacion(despejado/lluvia)</h5>
                </div>
            </div>
            <div class="card bg-white bg-opacity-50">
                <div class="ciudad">
                    <h3>DIA DE LA SEMANA</h3>
                </div>
                <div>
                    <img src={imagenes.img2} class="card-img-top" id="lluvia" alt="..."></img>
                </div>
                <div class="tiempo">
                    <h5>situacion(despejado/lluvia)</h5>
                </div>
            </div>
            <div class="card bg-white bg-opacity-50">
                <div class="ciudad">
                    <h3>DIA DE LA SEMANA</h3>
                </div>
                <div>
                    <img src={imagenes.img2} class="card-img-top" id="lluvia" alt="..."></img>
                </div>
                <div class="tiempo">
                    <h5>situacion(despejado/lluvia)</h5>
                </div>
            </div>
        </div>
    )
}