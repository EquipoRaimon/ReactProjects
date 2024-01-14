import './App.css'
import './formulario.css'
import './cuadroGrande.css'
import Form from './components/formulario.jsx'
import React, { useState } from 'react'
import Cuadrado from './components/cuadrado.jsx'
import Cuadros from './components/cuadros.jsx'


function App() {
  const api = {
    key: "d5131b049e69f779b34e67809f654bc9",
    base: "https://api.openweathermap.org/data/2.5/forecast"
  }

  const [buscar, setBuscar] = useState('')
  const [weather, setweather] = useState('')

  const buscarPressed = () => {
    fetch(`${api.base}?q=${buscar}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setweather(result);
      });
  }

    const diaDeHoy = new Date(); //DIA ACTUAL
    const dias = diaDeHoy.getDay();
    const days = ["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"]; //ARRAY CON LOS NOMBRES, EMPEZANDO POR DOMINGO PORQUE ESTA EN FORMATO EE.UU
    function sumaDeDia(dias) {
        return dias % 7
    }
    //LOS SIGUIENTES DIAS LOS SACAREMOS SUMANDO AL DIA ACTUAL 1, 2, 3 Y 4
    const segundoDia = sumaDeDia(dias + 1);
    const dia2 = days[segundoDia];
    const tercerDia = sumaDeDia(dias + 2);
    const dia3 = days[tercerDia];
    const cuartoDia = sumaDeDia(dias + 3);
    const dia4 = days[cuartoDia];
    const quintoDia = sumaDeDia(dias + 4);
    const dia5 = days[quintoDia];

    

  return (
      <div>
        <main className='mx-auto'>
          <div className='mb-2'>
            <Form setBuscar={setBuscar} buscarPressed={() => buscarPressed}></Form>
          </div>
          <Cuadrado weather={weather} ></Cuadrado>
          <div className="cuadroConjunto card-group mt-4 ">
            <Cuadros weather={weather} num={1} diaSemana={dia2}></Cuadros>
            <Cuadros weather={weather} num={2} diaSemana={dia3}></Cuadros>
            <Cuadros weather={weather} num={3} diaSemana={dia4}></Cuadros>
            <Cuadros weather={weather} num={4} diaSemana={dia5}></Cuadros>
          </div>
        </main>
      </div>
  )
}

export default App
