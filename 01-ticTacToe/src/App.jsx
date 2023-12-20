import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import BotonR from './components/GameStatus'
import { calcularGanador } from './utils/gameLogic';

function App() {
  const [casillas,setValorCasilla] = useState(Array(9).fill(null));

  const [jugadorActual, cambiarJugador] = useState("X");

  function handleClick(index){
    if(casillas[index] == null){
      const asignarValor = casillas.map((c, i) => {
        if (i === index) {
          return jugadorActual;
        } else {
          return c;
        }
      });
      setValorCasilla(asignarValor);
      if(jugadorActual =="X"){
        cambiarJugador("O")
      }else{
        cambiarJugador("X")
      }
    }
    if(calcularGanador(casillas)){
      alert("Has ganado jugador"+jugadorActual)
    }
    
      
  }

  return (
    <>

      <Board casillas={casillas} handleClick={handleClick}></Board>
      
      <BotonR></BotonR>

    </>
    )
}

export default App
