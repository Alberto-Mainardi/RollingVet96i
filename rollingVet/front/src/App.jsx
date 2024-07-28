import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarApp from './common/NavbarApp'
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';
import Contacto from './views/Contacto';
import Planes from './views/Planes';
import Ingresar from './views/Ingresar';
import Registrarse from './views/Registrarse';
import AdministrarPacientes from './views/AdministrarPacientes';
import AdministrarTurnos from './views/AdministrarTurnos';
import NavBarCollapseEjemplo from './common/NavBarCollapseEjemplo'

function App() {


  return (
    <BrowserRouter className='bg-dark'>
      <NavbarApp/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/ingresar' element={<Ingresar/>}/>
          <Route path='/registrarse' element={<Registrarse/>}/>
          <Route path='/planes' element={<Planes />}/>
          <Route path='/admin/gestionPacientes' element={<AdministrarPacientes/>}/>
          <Route path='/admin/gestionTurnos' element={<AdministrarTurnos/>}/>
          <Route path='*' element={<ErrorScreen/>} />
          
        </Routes>
    </BrowserRouter>
  )
}

export default App
