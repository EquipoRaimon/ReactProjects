import imagenes from "../assets/imagenes";

export default function Cuadrado({weather}) {
    return (
        <div className="cuadroGrande card bg-white bg-opacity-50 text-black">
          <div className="ciudad">
            {typeof weather.city !== "undefined" ? (
              <h3>{weather.city.name}</h3>
            ) : (
              ""
            )}
          </div>
          <div className="grados">
            {typeof weather.list !== "undefined" ? (
              <h4>{weather.list[0].main.temp}ºC</h4>
            ) : (
              ""
            )}
          </div>
          <div>
            <img src={imagenes.img1} className="card-img" id="sol" alt=""></img>
          </div>
          <div className="TIEMPO">
            {typeof weather.list != "undefined" ? (
              <h5>{weather.list[0].weather[0].main}👉{weather.list[0].weather[0].description}</h5>
            ) : (
              ""
            )}
          </div>
          <div className="demas">
            {typeof weather.list != "undefined" ? (
              <h6>Presión: {weather.list[0].main.pressure} Pa</h6>
            ) : (
              ""
            )}
            {typeof weather.list != "undefined" ? (
              <h6>Humedad: {weather.list[0].main.humidity} g/m³</h6>
            ) : (
              ""
            )}
            {typeof weather.list != "undefined" ? (
              <h6>Viento: {weather.list[0].wind.speed} m/s</h6>
            ) : (
              ""
            )}
            {typeof weather.list != "undefined" ? (
              <h6>Nubosidad: {weather.list[0].clouds.all} octa</h6>
            ) : (
              ""
            )}
          </div>
        </div>
    )
}