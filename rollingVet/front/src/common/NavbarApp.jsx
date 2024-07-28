import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarApp = () => {
    return (

        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"> <Link className='navbar-branch' to="/">
                    <img src="" alt="logo" />
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">


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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarApp


