import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Productos from './components/Products'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Menu />
      <Inicio />
      <Productos />
      <Contacto />
    </div>
  )
}

export default App
