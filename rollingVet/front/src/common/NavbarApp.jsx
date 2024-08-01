import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import administrarPacienteLogo from '../assets/media/administrarPacienteLogo.svg'
import administrarTurnoLogo from '../assets/media/administrarTurnosLogo.svg'
const NavbarApp = () => {
    return (

        <Navbar collapseOnSelect expand="lg" className=" bg-navBar w-100 navBar-Height align-items-center">
            <Container className='m-0'>
                <Link className='navbar-branch' to="/">
                
                   
                    <img  className='w-50' src="" alt="logo" />
                
                
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-4">


                        <NavLink className="nav-link text-white fs-5" to="/">
                            Inicio
                        </NavLink>

                        <NavLink className="nav-link  text-white fs-5" to="/nosotros">
                            Nosotros
                        </NavLink>
                        <NavLink className="nav-link  text-white fs-5" to="/planes">
                            Planes
                        </NavLink>
                        <NavLink className="nav-link  text-white fs-5" to="/contacto">
                            Contáctanos
                        </NavLink>


                        <NavLink className="nav-link  text-white fs-5" to="/ingresar">
                            Ingresar
                        </NavLink>
                        <NavLink className="nav-link  text-white fs-5" to="/registrarse">
                            Registrarse
                        </NavLink>

                        <NavLink className="nav-link  text-white fs-5" to="/admin/gestionPacientes">
                            <img  className='' src={administrarPacienteLogo} alt="logo" />
                        </NavLink>
                        <NavLink className="nav-link  text-white fs-5" to="/admin/gestionTurnos">
                        <img  className='' src={administrarTurnoLogo} alt="logo" />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    )
}

export default NavbarApp


