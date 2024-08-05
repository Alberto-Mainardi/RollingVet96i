import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { validarPaciente, crearPaciente, ingresoPaciente, traerPacientes, traerTurnos, crearTurno, actualizarTurno, eliminarTurno, validarTurno } from "./utils/index";
import NavbarApp from './common/NavbarApp';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';
import Contacto from './views/Contacto';
import Planes from './views/Planes';
import Ingresar from './views/Ingresar';
import Registrarse from './views/Registrarse';
import AdministrarPacientes from './views/AdministrarPacientes';
import AdministrarTurnos from './views/AdministrarTurnos';
import { ContextoUsuario } from './components/ContextoUsuario';

function App() {

  const [user, setUser] = useState(
    {
      "nombre": "",
      "apellido":"",
      "email": "",
      "telefono": "",
      "estado":false,
      "mascotasIDs":[],
      "admin":false,
    }
  )
  console.log(user);

  

  return (
    <ContextoUsuario.Provider value={{user,setUser}}>
    <BrowserRouter className='bg-dark'>
      <NavbarApp/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/ingresar' element={<Ingresar ingresoPaciente={ingresoPaciente}/>}/>
          <Route path='/registrarse' element={<Registrarse/>}/>
          <Route path='/planes' element={<Planes />}/>
          <Route path='/admin/gestionPacientes' element={<AdministrarPacientes traerTurnos={traerTurnos} crearTurno={crearTurno} actualizarTurno={actualizarTurno} validarTurno={validarTurno} eliminarTurno={eliminarTurno}/>}/>
          <Route path='/admin/gestionTurnos' element={<AdministrarTurnos />}/>
          {/* <Route path='*' element={<ErrorScreen/>} /> */}
          
        </Routes>
    </BrowserRouter>
    </ContextoUsuario.Provider>
  )
}

export default App
