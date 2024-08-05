import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { Form, Button, Table } from "react-bootstrap";
import Swal from 'sweetalert2'
import '../estilos/adminTurnos.css'
import '../App.css'



const AdministrarTurnos = ({ traerTurnos, crearTurno, eliminarTurno }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    traerTurnos().then(data => { setTurnos(data) })
  }, [])

  const asignarTurno = async (obj) => {
    try {
      let turno = obj;

      console.log(turnos);
      console.log(turno);

      const turnoOcupado = turnos.find((turnoDB) => {
        if (turnoDB.hora == turno.hora && turnoDB.fecha == turno.fecha && turnoDB.sucursal == turno.sucursal) {
          return true;
        }
      })


      if (!turnoOcupado) {
        Swal.fire({
          title: "Turno creado exitosamente",
          text: "Aprieta el botón para reiniciar la pestaña",
          icon: "success"

        }).then((result) => {
          if (result.isConfirmed) {
            location.reload()
          }
        });
        crearTurno(turno)
      } else {
        Swal.fire({
          icon: "error",
          title: "No se pudo crear el turno",
          text: "Ya existe un turno asignado para este horario.",
        });

      }
    } catch (error) {
      console.error(error);

    }


    reset()
  }
  return (
    <>
      <div className="d-flex justify-content-between container">
        <div>Administrar Turnos
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>SUCURSAL</th>
                <th>PROPIETARIO</th>
                <th>MASCOTA</th>
                <th>MOTIVO DE CONSULTA</th>
                <th>TELEFONO</th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              {
                turnos.map((turno) => {

                  return <tr className="tr" key={`TurnoRow${turno.id}`}><td>{turno.id}</td><td>{turno.fecha}</td><td>{turno.hora}</td><td>{turno.sucursal}</td> <td>{turno.propietario}</td><td>{turno.mascota}</td><td>{turno.motivoConsulta}</td><td>{turno.telefono}</td>
                    <td>
                      <Link className='btn btn-warning me-1' to={`/admin/modificarTurno/${turno.id}`} variant="warning">Editar</Link><Button variant="danger" onClick={() => {
                        eliminarTurno(turno.id);
                        location.reload();
                      }}>Borrar</Button></td>

                  </tr>
                })
              }
            </tbody>
          </Table>



        </div>
        <div>Asignar Turnos
          <Form onSubmit={handleSubmit(asignarTurno)}>
            <Form.Control
              type="date"
              name="fecha"
              {...register("fecha",
                { required: "La fecha es un campo obligatorio" }
              )}
              className="bg-danger" />
            <Form.Select
              name="hora"
              {...register("hora"
              )}>
              <option value="9:00">9:00</option>
              <option value="9:30">9:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
            </Form.Select>
            <Form.Select
              name="sucursal"
              {...register("sucursal"
              )}>
              <option value="sucursal1">Sucursal 1</option>
              <option value="sucursal2">Sucursal 2</option>
            </Form.Select>



            <Form.Group className="mb-3" controlId="input-propietario">
              <Form.Label>Propietario</Form.Label>
              <Form.Control type="text" placeholder="Juan Ignacio Valdez" name="propietario" {...register("propietario",
                { required: "El propietario es un campo obligatorio" }
              )} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="input-mascota">
              <Form.Label>Mascota</Form.Label>
              <Form.Control type="text" placeholder="perro Labrador" name="mascota" {...register("mascota",
                { required: "La mascota es un campo obligatorio" }
              )} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="input-motivo">
              <Form.Label>Motivo</Form.Label>
              <Form.Control type="text" placeholder="motivo de la Consulta" name="motivoConsulta" {...register("motivoConsulta",
                { required: "El motivo de la consulta es un campo obligatorio" }
              )} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="input-tel">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="number" placeholder="3515695548" name="telefono" {...register("telefono",
                { required: "El telefono es un campo obligatorio" }
              )} />
            </Form.Group>

            <Button type="submit">Crear Turno</Button>
          </Form>
        </div>
      </div>



    </>
  );
};

export default AdministrarTurnos;
