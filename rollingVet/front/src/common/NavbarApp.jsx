import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavbarApp = () => {
  return (
    <Navbar className='d-flex justify-content-center text-white navBar'>
        <Nav className='me-auto'>


            <Link className='navbar-branch' to="/">
                <img src="" alt="logo" />
            </Link>
            <NavLink className="nav-link" to="/">
                Inicio
            </NavLink>

            <NavLink className="nav-link" to="/nosotros">
                Nosotros
            </NavLink>
            <NavLink className="nav-link" to="/planes">
                Planes
            </NavLink>
            <NavLink className="nav-link" to="/contacto">
                Contáctanos
            </NavLink>


            <NavLink className="nav-link" to="/ingresar">
                Ingresar
            </NavLink>
            <NavLink className="nav-link" to="/registrarse">
                Registrarse
            </NavLink>

            <NavLink className="nav-link" to="/admin/gestionPacientes">
                Administrar Pacientes
            </NavLink>
            <NavLink className="nav-link" to="/admin/gestionTurnos">
                Administrar Turnos
            </NavLink>
            
        </Nav>
    </Navbar>
  )
}

export default NavbarApp