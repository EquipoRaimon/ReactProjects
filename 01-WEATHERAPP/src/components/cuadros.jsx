import imagenes from "../assets/imagenes";


export default function Cuadros({weather, num}) {
    return (
        <div className="card bg-white bg-opacity-50 mx-2">
            <div className="ciudad">
                <h3>LUNES</h3>
            </div>
            <div>
                <img src={imagenes.img2} className="card-img-top" id="lluvia" alt="..."></img>
            </div>
            <div className="tiempo mt-4">
                {typeof weather.list != "undefined" ? (
                    <h4>{weather.list[num].main.temp}</h4>
                ) : (
                    ""
                )}
            </div>
            <div className="tiempo mt-2">
                {typeof weather.list != "undefined" ? (
                    <h4>{weather.list[num].weather[0].main}</h4>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}