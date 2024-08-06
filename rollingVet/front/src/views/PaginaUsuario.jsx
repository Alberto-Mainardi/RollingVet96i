import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextoUsuario } from '../components/ContextoUsuario'
import { Card, ListGroup, Dropdown } from 'react-bootstrap'
import DropdownMascotasUsuario from '../components/DropdownMascotasUsuario'
import '../estilos/miCuenta.css'

const PaginaUsuario = ({ eliminarMascota, traerMascotasUsuario, }) => {

    const { user } = useContext(ContextoUsuario)
    const { nombre, apellido, email, telefono, id, mascotasIDs } = user;

    const [IDmascotas, setIDMascotas] = useState(mascotasIDs);
    const [mascotasUsuario, setMascotasUsuario] = useState([]);

    traerMascotasUsuario(IDmascotas)
        .then(data => {
            setMascotasUsuario(data);
        })

    return (
        <main className='bg-miCuenta w-100'>
            <Card className='miCuentaContainer d-flex' style={{ maxWidth: "1280px" }}>
                <Card.Body className='text-start'>
                    <Card.Title className='fs-1'>Mi Cuenta</Card.Title>
                    <Card.Text>
                    {`${nombre} ${apellido}`}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="detallesPerfil">
                    <ListGroup.Item>
                        <p>EMAIL</p>
                        {`${email}`}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>NÚMERO DE TELÉFONO</p>
                        {`${telefono}`}
                    </ListGroup.Item>
                    <ListGroup.Item>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Mis mascotas
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {mascotasUsuario.map((m, i) => {
                                    return <DropdownMascotasUsuario key={`mascota${i}`} mascota={m} paciente={user} eliminarMascota={eliminarMascota}></DropdownMascotasUsuario>
                                })}
                                <Dropdown.Item >
                                    <NavLink className="nav-link" to="../agregarMascota">
                                        <i class="bi bi-plus"></i> <i className='opacity-75'>Agregar Mascota</i>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ListGroup.Item>



                </ListGroup>
            </Card>
        </main>

    );
}

export default PaginaUsuario