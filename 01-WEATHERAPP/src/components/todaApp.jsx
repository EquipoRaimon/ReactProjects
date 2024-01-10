import '../formulario.css'
import React, { useState } from 'react'
import imagenes from "../assets/imagenes";
import '../cuadroGrande.css'

const api = {
  key: "d5131b049e69f779b34e67809f654bc9",
  base: "https://api.openweathermap.org/data/2.5/forecast"
}

export default function Form() {
  const [buscar, setBuscar] = useState('')
  const [weather, setweather] = useState('')

  const buscarPressed = () => {
    fetch(`${api.base}?q=${buscar}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setweather(result);
      });
  }

  return (
    <div>
      <div>
        <input type="text" className="form-control" id="lugar" placeholder="Ciudad" onChange={(e) => setBuscar(e.target.value)}></input>
        <button onClick={buscarPressed} type="submit" className="btn btn-dark">🔎</button>
      </div>

      <div>
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
        <div className="cuadroConjunto card-group mt-4">
          <div className="card bg-white bg-opacity-50 me-4">
            <div className="ciudad">
              <h3>LUNES</h3>
            </div>
            <div>
              <img src={imagenes.img2} className="card-img-top" id="lluvia" alt="..."></img>
            </div>
            <div className="tiempo mt-4">
            {typeof weather.list != "undefined" ? (
              <h4>{weather.list[1].main.temp}</h4>
            ) : (
              ""
            )}
            </div>
            <div className="tiempo mt-2">
            {typeof weather.list != "undefined" ? (
              <h4>{weather.list[1].weather[0].main}</h4>
            ) : (
              ""
            )}
            </div>
          </div>
          <div className="card bg-white bg-opacity-50 me-4">
            <div className="ciudad">
              <h3>MARTES</h3>
            </div>
            <div>
              <img src={imagenes.img2} className="card-img-top" id="lluvia" alt="..."></img>
            </div>
            <div className="tiempo mt-4">
            {typeof weather.list != "undefined" ? (
              <h4>{weather.list[2].main.temp}</h4>
            ) : (
              ""
            )}
            </div>
            <div className="tiempo mt-2">
            {typeof weather.list != "undefined" ? (
              <h4>{weather.list[2].weather[0].main}</h4>
            ) : (
              ""
            )}
            </div>
          </div>
          <div className="card bg-white bg-opacity-50 me-4">
            <div className="ciudad">
              <h3>MIÉRCOLES</h3>
            </div>
            <div>
              <img src={imagenes.img2} className="card-img-top" id="lluvia" alt="..."></img>
            </div>
            <div className="tiempo mt-4">
            {typeof weather.list != "undefined" ? (
              <h4>{weather.list[3].main.temp}</h4>
            ) : (
              ""
            )}
            </div>
            <div className="tiempo mt-2">
            {typeof weather.list != "undefined" ? (
              <h4>{weather.list[3].weather[0].main}</h4>
            ) : (
              ""
            )}
            </div>
          </div>
          <div className="card bg-white bg-opacity-50">
            <div className="ciudad">
              <h3>JUEVES</h3>
            </div>
            <div>
              <img src={imagenes.img2} className="card-img-top" id="lluvia" alt="..."></img>
            </div>
            <div className="tiempo mt-4">
            {typeof weather.list != "undefined" ? (
              <h4>{weather.list[4].main.temp}</h4>
            ) : (
              ""
            )}
            </div>
            <div className="tiempo mt-2">
            {typeof weather.list != "undefined" ? (
              <h4>{weather.list[4].weather[0].main}</h4>
            ) : (
              ""
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}