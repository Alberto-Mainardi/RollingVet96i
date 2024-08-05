import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextoUsuario } from '../components/ContextoUsuario'
import { Card, ListGroup, Dropdown } from 'react-bootstrap'
import { traerMascotas } from '../utils'
import DropdownMascotasUsuario from '../components/DropdownMascotasUsuario'

const PaginaUsuario = ({ traerMascotas, traerMascotasUsuario, capturarUnPaciente }) => {

    const { user } = useContext(ContextoUsuario)
    const { nombre, apellido, email, telefono, id, mascotasIDs } = user;

    const [IDmascotas, setIDMascotas] = useState(mascotasIDs);
    const [mascotasUsuario, setMascotasUsuario] = useState([]);

    traerMascotasUsuario(IDmascotas)
        .then(data => {
            setMascotasUsuario(data);
        })

    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Mi Cuenta</Card.Title>
                <Card.Text>
                    {nombre}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <p>NOMBRE COMPLETO</p>
                    {`${apellido} ${nombre}`};
                </ListGroup.Item>
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
                                return <DropdownMascotasUsuario key={`mascota${i}`} mascota={m} paciente={user}></DropdownMascotasUsuario>
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
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default PaginaUsuario