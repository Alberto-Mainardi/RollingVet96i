import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
//import { validarTurno, crearTurno, traerTurnos, actualizarTurno, eliminarTurno } from "../utils/index";
//import Swal from 'sweetalert2'




const AdministrarTurnos = () => {

  const crearTurno = ({cargarData}) => {
    const {register, handleSubmit, formState:{errors}, reset}=useForm();
    const addItem = (obj)=> {
      cargarData(obj);
      reset()
    }
  }

  // const modeloTurno = 
  // {
  //     "paciente": 0,
	// 		"propietario": "",
	// 		"telefono": "",
	// 		"sucursal": "",
	// 		"motivoConsulta": "",
	// 		"fecha": "",
	// 		"hora": "",
	// 		"estado": true
  //   };

  
  //   let turnosAsignados=[]
  //   const crearTurno = async () => {
  //   turnosAsignados = await traerTurnos();
    
  //   return turnosAsignados
    
    
  // }
  // crearTurno();
  // console.log(turnosAsignados);
  

  return (
    <>
      <div>AdministrarTurnos</div>
      <Form onSubmit={handleSubmit=(addItem)} method="POST">
        <Form.Control type="date" name="fecha"  className="bg-danger" />
        <Form.Select name="hora" >
          <option value="">9:00</option>
          <option value="">9:30</option>
          <option value="">10:00</option>
          <option value="">10:30</option>
          <option value="">11:00</option>
          <option value="">11:30</option>
          <option value="">12:00</option>
          <option value="">12:30</option>
          <option value="">13:00</option>
          <option value="">13:30</option>
        </Form.Select>
        <Form.Select>
          <option value="">Sucursal 1</option>
          <option value="">Sucursal 2</option>
        </Form.Select>
        

        
      <Form.Group className="mb-3"  controlId="input-propietario">
        <Form.Label>Propietario</Form.Label>
        <Form.Control type="text" placeholder="Juan Ignacio Valdez" name="propietario" />
      </Form.Group>
      <Form.Group  className="mb-3" controlId="input-paciente">
        <Form.Label>Paciente</Form.Label>
        <Form.Control type="text" placeholder="perro Labrador" name="paciente" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="input-motivo">
        <Form.Label>Motivo</Form.Label>
        <Form.Control  type="text" placeholder="motivo de la Consulta" name="motivoConsulta" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="input-tel">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control  type="number" placeholder="3515695548" name="telefono" />
      </Form.Group>
    
      <Button type="submit" onClick={crearTurno()}>Crear Turno</Button> 
      </Form>
      
    </>
  );
};

export default AdministrarTurnos;
