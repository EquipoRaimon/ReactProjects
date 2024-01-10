import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import {BotonR, Turno} from './components/GameStatus'
import { calcularGanador, isRelleno } from './utils/gameLogic';

function App() {
  const [casillas,setValorCasilla] = useState(Array(9).fill(null));

  const [jugadorActual, cambiarJugador] = useState("X");

  function handleClick(index){

    if(calcularGanador(casillas) || casillas[index]){
      return;
    }

      actualizarEstado(index);
      cambiarXO();
      
  }

  function actualizarEstado(index){
      const asignarValor = casillas.map((casilla, indiceCasilla) => {
        if (indiceCasilla === index) {
          return jugadorActual;
        } else {
          return casilla;
        }
      });
    setValorCasilla(asignarValor);

  }

  function cambiarXO(){
    if(jugadorActual =="X"){
      cambiarJugador("O")
    }else{
      cambiarJugador("X")
    }
  }

  const ganador = calcularGanador(casillas);
  const relleno = isRelleno(casillas);
  
  return (
    <>
      <Turno ganador={ganador} jugadorActual={jugadorActual} relleno={relleno}></Turno>
      
      <Board casillas={casillas} handleClick={handleClick}></Board>
      
      <BotonR setValorCasilla={setValorCasilla} cambiarJugador={cambiarJugador}></BotonR>

    </>
    )
}

export default App
