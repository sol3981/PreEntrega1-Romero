import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'


function App() {
 

  return (
   <>
      <NavBar />
      <ListaCarrito greeting="hola!"/>
   </>
  )
}

export default App
