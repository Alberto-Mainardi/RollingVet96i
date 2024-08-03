import {useContext} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import administrarPacienteLogo from '../assets/media/administrarPacienteLogo.svg'
import administrarTurnoLogo from '../assets/media/administrarTurnosLogo.svg'
import { ContextoUsuario } from '../components/ContextoUsuario';
const NavbarApp = () => {
    /*
    const responsiveNavbarNav = document.querySelector('#responsive-navbar-nav');
    const responsiveNavBarNavToggle = document.querySelector('#responsive-navbar-nav-toggle');
    const navToggle = () => {
        responsiveNavbarNav.classList.toggle("collapsing");
        setTimeout(() => {
            responsiveNavbarNav.classList.toggle("show");
            responsiveNavbarNav.classList.toggle("collapsing");
        }, 500)
        console.log(responsiveNavbarNav);
    }
        */
    
    const {user, setUser} = useContext(ContextoUsuario);
    const logout = () => {
        setUser(
            {
                "user": "",
                "password": "",
                "email": "",
                "admin":false
              }
        )
    }
    return (

        <Navbar collapseOnSelect expand="lg" className=" bg-navBar w-100 navBar-Height align-items-center">
            <Container className='m-0'>
                <Link className='navbar-branch' to="/">


                    <img className='w-50' src="" alt="logo" />


                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" id="responsive-navbar-nav-toggle" />
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

                        {user.id ? <>
                            <NavLink className="nav-link text-white fs-5" onClick={logout}>
                                Cerrar Sesión
                            </NavLink>
                        </> : <>
                            <NavLink className="nav-link  text-white fs-5" to="/ingresar">
                                Ingresar
                            </NavLink>
                            <NavLink className="nav-link  text-white fs-5" to="/registrarse">
                                Registrarse
                            </NavLink>
                        </>

                        }



                        {user.admin ? <>
                            <NavLink className="nav-link  text-white fs-5" to="/admin/gestionPacientes">
                                <img className='' src={administrarPacienteLogo} alt="logo" />
                            </NavLink>
                            <NavLink className="nav-link  text-white fs-5" to="/admin/gestionTurnos">
                                <img className='' src={administrarTurnoLogo} alt="logo" />
                            </NavLink>
                        </> : <>
                        </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavbarApp


