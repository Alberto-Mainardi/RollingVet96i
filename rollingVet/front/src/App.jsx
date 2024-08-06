import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RutasAdmin, RutasPaciente, RutasInvitado } from './routes/RutasPrivadas'
import { validarPaciente, crearPaciente, modificarPaciente,ingresoPaciente, traerPacientes, capturarUnPaciente, eliminarPaciente, crearMascota, eliminarMascota,traerMascotas, traerMascotasUsuario, traerTurnos, traerUnTurno,crearTurno, actualizarTurno, eliminarTurno, validarTurno } from "./utils/index";
import NavbarApp from './common/NavbarApp';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';
import Contacto from './views/Contacto';
import Planes from './views/Planes';
import Ingresar from './views/Ingresar';
import Registrarse from './views/Registrarse';
import AdministrarPacientes from './views/AdministrarPacientes';
import AdministrarTurnos from './views/AdministrarTurnos';
import PaginaUsuario from './views/PaginaUsuario';
import AgregarMascota from './views/AgregarMascota';
import ModificarTurno from './views/ModificarTurno';

import { ContextoUsuario } from './components/ContextoUsuario';
import CrearPaciente from './views/CrearPaciente';

import Error404 from './views/Error404';

function App() {

  const usuarioGuardado = JSON.parse(localStorage.getItem("user")) 
  || 
  {
    "nombre": "",
    "apellido": "",
    "email": "",
    "telefono": "",
    "estado": false,
    "mascotasIDs": [],
    "admin": false,
  }
  const [user, setUser] = useState(usuarioGuardado);
  
  console.log(user);


  return (
    <ContextoUsuario.Provider value={{ user, setUser }}>
      <BrowserRouter className='bg-dark'>
        <NavbarApp />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/planes' element={<Planes />}/>
          <Route path='/admin/gestionPacientes' element={<AdministrarPacientes/>}/>
          <Route path='/admin/gestionTurnos' element={<AdministrarTurnos/>}/>
          {/* <Route path='*' element={<ErrorScreen/>} /> */}
          
        </Routes>
      </BrowserRouter>
    </ContextoUsuario.Provider>
  )
}

export default App
