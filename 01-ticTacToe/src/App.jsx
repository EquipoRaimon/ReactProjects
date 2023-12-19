import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board'
import Square from './components/Square'
import BotonR from './components/GameStatus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Board></Board>
      <BotonR></BotonR>
    </div>
    )
}

export default App
