import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RutasAdmin, RutasPaciente, RutasInvitado } from './routes/RutasPrivadas'
import { validarPaciente, crearPaciente, modificarPaciente, ingresoPaciente, traerPacientes, capturarUnPaciente, eliminarPaciente, crearMascota, eliminarMascota, traerMascotas, traerMascotasUsuario, traerTurnos, traerUnTurno, crearTurno, actualizarTurno, eliminarTurno, validarTurno } from "./utils/index";
import NavbarApp from './common/NavbarApp';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';
import Contacto from './views/Contacto';
import Planes from './views/Planes';
import Ingresar from './views/Ingresar';
import Registrarse from './views/Registrarse';
import AdministrarPacientes from './views/AdministrarPacientes';
import AdministrarTurnos from './views/AdministrarTurnos';
import Footer from './common/Footer';
import PaginaUsuario from './views/PaginaUsuario';
import AgregarMascota from './views/AgregarMascota';
import ModificarTurno from './views/ModificarTurno';
import Error404 from './views/Error404'
import { ContextoUsuario } from './components/ContextoUsuario';
import CrearPaciente from './views/CrearPaciente';


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
          <Route path='/' element={<Inicio />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/planes' element={<Planes />} />


          <Route path='/user' element={<RutasPaciente />}>
            <Route path='/user/userpage' element={<PaginaUsuario eliminarMascota={eliminarMascota} traerMascotasUsuario={traerMascotasUsuario} />} />
            <Route path='/user/agregarMascota' element={<AgregarMascota crearMascota={crearMascota} modificarPaciente={modificarPaciente} />} />

          </Route>

          <Route path='/guest' element={<RutasInvitado />}>
            <Route path='/guest/ingresar' element={<Ingresar ingresoPaciente={ingresoPaciente} />} />
            <Route path='/guest/registrarse' element={<Registrarse />} />
          </Route>


          <Route path='*' element={<Error404 />} />


          <Route path='/admin' element={<RutasAdmin />}>
            <Route path='/admin/crearPaciente/:id' element={<CrearPaciente />} />
            <Route path='/admin/gestionPacientes' element={<AdministrarPacientes traerPacientes={traerPacientes} eliminarPaciente={eliminarPaciente} />} />
            <Route path='/admin/gestionTurnos' element={<AdministrarTurnos traerTurnos={traerTurnos} crearTurno={crearTurno} eliminarTurno={eliminarTurno} />} />
            <Route path='/admin/modificarTurno/:id' element={<ModificarTurno actualizarTurno={actualizarTurno} traerUnTurno={traerUnTurno} />} />
          </Route>

          {/* <Route path='*' element={<ErrorScreen/>} /> */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextoUsuario.Provider>
  )
}

export default App
