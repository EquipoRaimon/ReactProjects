import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Formulario.jsx'
import CuadroGrande from './components/CuadroGrande.jsx'
import CuadroPequeño from './components/CuedroPequeño.jsx'


function App() {
  const [count, setCount] = useState(0)
  return (
    <body className='body'>
      <header></header>
      <main className='mx-auto'>
        <div>
          <Form />
        </div>
        <div>
          <CuadroGrande />
        </div>
        <div>
          <CuadroPequeño />
        </div>
      </main>
      <footer></footer>
    </body>
  )
}

export default App
