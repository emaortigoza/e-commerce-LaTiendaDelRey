import { useState } from 'react'

import NavBar from './components/NavBar/NavBar';
import ItemLisContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
      <NavBar/>
      <ItemLisContainer greeting="Bienvenidos a la Tienda Del Rey"/>
    </>
  )
}

export default App
