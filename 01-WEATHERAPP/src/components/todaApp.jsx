import '../formulario.css'
import React, { useState } from 'react'
import imagenes from "../assets/imagenes";
import '../cuadroGrande.css'

const api = {
  key: "d5131b049e69f779b34e67809f654bc9",
  base: "https://api.openweathermap.org/data/2.5/"
}

const api2 = {
  key: "d5131b049e69f779b34e67809f654bc9",
  base: "https://pro.openweathermap.org/data/2.5/forecast/"
}
export function Form() {
  const [buscar, setBuscar] = useState('')
  const [weather, setweather] = useState('')
  //const [proxweather, setProxweather] = useState('');

  const buscarPressed = () => {
    fetch(`${api.base}weather?q=${buscar}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setweather(result);
      });
    /*fetch(`${api2.base}forecast/hourly?q=${buscar}&appid=${api2.key}`)
      .then((res) => res.json())
      .then((result) => {
        setProxweather(result);
      });*/
  }


  return (
    <div>
      <div>
        <input type="text" className="form-control" id="lugar" placeholder="Ciudad" onChange={(e) => setBuscar(e.target.value)}></input>
        <button onClick={buscarPressed} type="submit" className="btn btn-primary">Buscar</button>
      </div>



      <div>
        <div className="cuadroGrande card bg-white bg-opacity-50 text-black">
          <div className="ciudad">
            <h3>{weather.name}</h3>
          </div>
          <div className="grados">
            {typeof weather.main !== "undefined" ? (
              <h4>{weather.main.temp}ºC</h4>
            ) : (
              ""
            )}
          </div>
          <div>
            <img src={imagenes.img1} className="card-img" id="sol" alt=""></img>
          </div>
          <div className="TIEMPO">
            {typeof weather.main !== "undefined" ? (
              <h5>{weather.weather[0].main}👉{weather.weather[0].description}</h5>
            ) : (
              ""
            )}
          </div>
          <div className="demas">
            {typeof weather.main !== "undefined" ? (
              <h6>Presión {weather.main.pressure} Pa</h6>
            ) : (
              ""
            )}
            {typeof weather.main !== "undefined" ? (
              <h6>Humedad {weather.main.humidity} g/m³</h6>
            ) : (
              ""
            )}
            {typeof weather.main !== "undefined" ? (
              <h6>Viento {weather.wind.speed} m/s</h6>
            ) : (
              ""
            )}
            {typeof weather.main !== "undefined" ? (
              <h6>Nubosidad {weather.clouds.all} octa</h6>
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
              <h4>21º</h4>
            </div>
            <div className="tiempo mt-2">
              <h4>DESPEJADO</h4>
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
              <h4>18º</h4>
            </div>
            <div className="tiempo mt-2">
              <h4>DESPEJADO</h4>
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
              <h4>20º</h4>
            </div>
            <div className="tiempo mt-2">
              <h4>DESPEJADO</h4>
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
              <h4>23º</h4>
            </div>
            <div className="tiempo mt-2">
              <h4>DESPEJADO</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}