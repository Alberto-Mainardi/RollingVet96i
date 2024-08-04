import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { eliminarPaciente } from '../utils'
import Modal from 'react-bootstrap/Modal';

const AdministrarPacientes = ({eliminarPaciente,crearPaciente,traerPacientes,actualizarPaciente}) => {
  
  const [show, setShow] = useState(false);
  const [pacientes,setPacientes] = useState([]);
  
  useEffect(()=>{
    traerPacientes().then(data => {setPacientes(data)})
  },[])
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main>
      <h1>Adminsitrar Pacientes</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>

            {
              pacientes.map((paciente)=>{
                return <tr key={`PacienteRow${paciente.id}`}><td>{paciente.id}</td><td>{paciente.nombre}</td><td>{paciente.apellido}</td><td>{paciente.email}</td> <td>{paciente.telefono}</td><td><Button variant="warning" onClick={handleShow}>Editar</Button><Button variant="danger" onClick={()=>{eliminarPaciente(paciente.id);
                  location.reload();
                }}>Borrar</Button></td></tr>
              })
            }

            
          
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </main>
  )
}

export default AdministrarPacientes