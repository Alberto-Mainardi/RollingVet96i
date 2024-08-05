import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'




const AdministrarTurnos = ({ traerTurnos, crearTurno, actualizarTurno, eliminarTurno, validarTurno }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const asignarTurno = async (obj) => {
    try {
      let turnos = await traerTurnos();
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
          icon: "success"
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
      <div>AdministrarTurnos</div>
      <Form onSubmit={handleSubmit(asignarTurno)}>
        <Form.Control
          type="date"
          name="fecha"
          {...register("fecha"
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

    </>
  );
};

export default AdministrarTurnos;
