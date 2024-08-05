import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { eliminarPaciente } from '../utils'
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const AdministrarPacientes = ({eliminarPaciente,crearPaciente,traerPacientes,actualizarPaciente}) => {
  
  let pacienteEditar = {};
  const [show, setShow] = useState(false);
  const [pacientes,setPacientes] = useState([]);
  const {handleSubmit,register,reset,formState:{errors}} = useForm();

  const handleShow = ()=> setShow(true);
  const handleClose = ()=> setShow(false);

  useEffect(()=>{
    traerPacientes().then(data => {setPacientes(data)})
  },[])
  
  const pasarDatos = (obj)=>{
    pacienteEditar = obj;
    console.log(pacienteEditar);
    
  }

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
                return <tr key={`PacienteRow${paciente.id}`}><td>{paciente.id}</td><td>{paciente.nombre}</td><td>{paciente.apellido}</td><td>{paciente.email}</td> <td>{paciente.telefono}</td><td><Link className='btn btn-warning me-1' to={`/crearPaciente/${paciente.id}`} variant="warning">Editar</Link><Button variant="danger" onClick={()=>{eliminarPaciente(paciente.id);
                  location.reload();
                }}>Borrar</Button></td></tr>
              })
            }

            
          
        </tbody>
      </Table>

      <Table>
      <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Raza</th>
            <th>IdDueño</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            
        </tbody>
      </Table>      
    </main>
  )
}

export default AdministrarPacientes