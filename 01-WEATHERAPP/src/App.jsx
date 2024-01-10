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

  return (
      <div>
        <main className='mx-auto'>
          <div className='mb-2'>
            <Form setBuscar={setBuscar} buscarPressed={() => buscarPressed}></Form>
          </div>
          <Cuadrado weather={weather} ></Cuadrado>
          <div className="cuadroConjunto card-group mt-4 ">
            <Cuadros weather={weather} num={1} ></Cuadros>
            <Cuadros weather={weather} num={2}></Cuadros>
            <Cuadros weather={weather} num={3}></Cuadros>
            <Cuadros weather={weather} num={4}></Cuadros>
          </div>
        </main>
      </div>
  )
}

export default App
