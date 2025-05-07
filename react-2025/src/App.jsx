
import './App.css'
import Saludo from './components/practica1'
import {ListaOrdenada,Tarjeta} from './components/practica2'

function App() {
  
  const productos = ['Manzanas', 'Peras', 'Naranjas'];


  return (
    <>
      <Saludo/>
      <ListaOrdenada productos={productos} />
      <Tarjeta titulo="Tarjeta 1" descripcion="Esta es la tarjeta 1" boton="Boton 1"/>
      <Tarjeta titulo="Tarjeta 2" descripcion="Esta es la tarjeta 2" boton="Boton 2"/>
    </>
  )
}

export default App
