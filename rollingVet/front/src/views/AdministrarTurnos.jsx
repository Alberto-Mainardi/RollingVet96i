import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Form, Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import "../estilos/adminTurnos.css";
import "../App.css";


const AdministrarTurnos = ({ traerTurnos, crearTurno, eliminarTurno }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    traerTurnos().then((data) => {
      setTurnos(data);
      console.log(data);
      
    });
  }, []);

  const asignarTurno = async (obj) => {
    try {
      let turno = obj;
      console.log(turno);
      

      const turnoOcupado = turnos.find((turnoDB) => {
        if (
          turnoDB.hora == turno.hora &&
          turnoDB.fecha == turno.fecha &&
          turnoDB.sucursal == turno.sucursal
        ) {
          console.log(turnoDB);
          
          return true;
        }
      });

      if (!turnoOcupado) {
        Swal.fire({
          title: "Turno creado exitosamente",
          text: "Aprieta el botón para reiniciar la pestaña",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
        crearTurno(turno);
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

    reset();
  };

  const telefonoPattern = /^[0-9]{10}$/;
  const textoPattern = /^[a-zA-Z]+$/;


  return (
    <>
      <div className="justify-content-between container-fluid row p-5 bg-adminturnos">
        <div className="col-sm-12 col-md-8">
          <h2>Administrar Turnos</h2>
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
                return (
                  <tr className="tr" key={`TurnoRow${turno.id}`}>
                    <td>{turno.id}</td>
                    <td>{turno.fecha}</td>
                    <td>{turno.hora}</td>
                    <td>{turno.sucursal}</td>
                    <td>{turno.propietario}</td>
                    <td>{turno.mascota}</td>
                    <td>{turno.motivoConsulta}</td>
                    <td>{turno.telefono}</td>
                    <td>
                      <Link
                        className="btn btn-warning me-1"
                        to={`/admin/modificarTurno/${turno.id}`}
                        variant="warning"
                      >
                        Editar
                      </Link>
                      <Button
                        variant="danger"
                        onClick={() => {
                          eliminarTurno(turno.id);
                          location.reload();
                        }}
                      >
                        Borrar
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="col-sm-12 col-md-4">
          <h2>Asignar Turnos</h2>
          <Form onSubmit={handleSubmit(asignarTurno)}>
            <Form.Control
              type="date"
              name="fecha"
              {...register("fecha", {
                required: "La fecha es un campo obligatorio",
                validate: (value) => {
                  const fechaActual = new Date();
                  const fechaSeleccionada = new Date(value);
                  return (
                    fechaSeleccionada >= fechaActual ||
                    Swal.fire({
                      icon: "error",
                      title:
                        "No se puede cargar una fecha anterior a la de hoy",
                      text: "Por favor introduzca una fecha valida.",
                    })
                  );
                },
              })}
              className=""
            />
            {errors.fecha && <span>{errors.fecha.message}</span>}
            <br />
            <Form.Select name="hora" {...register("hora")}>
              
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
              <option value="14:00">13:30</option>
              <option value="14:30">13:30</option>
              <option value="15:00">13:30</option>
              <option value="15:30">13:30</option>
              <option value="16:00">13:30</option>
              <option value="16:30">13:30</option>
              <option value="17:00">13:30</option>
              <option value="17:30">13:30</option>
              <option value="18:00">13:30</option>
            </Form.Select>
            <br />
            <Form.Select name="sucursal" {...register("sucursal")}>
              <option value="sucursal1">Sucursal 1</option>
              <option value="sucursal2">Sucursal 2</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="input-propietario">
              <Form.Label>
                <h5>Propietario</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Ignacio Valdez"
                name="propietario"
                maxLength={30}
                minLength={5}
                {...register("propietario", {
                  required: "El propietario es un campo obligatorio",
                  pattern: {
                    value: textoPattern,
                    message: "el formato no es valido. Introduzca un nombre que sólo contenga caracteres alfabéticos"
                  }
                })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="input-mascota">
              <Form.Label>
                <h5>Mascota</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de la mascota"
                name="mascota"
                maxLength={30}
                minLength={1}
                {...register("mascota", {
                  required: "La mascota es un campo obligatorio",
                  pattern: {
                    value: textoPattern,
                    message: "el formato no es valido. Introduzca un nombre que sólo contenga caracteres alfabéticos"
                  }
                })}
              />
              <Form.Text className="text-danger">
                {errors.mascota?.message}
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="input-motivo">
              <Form.Label>
                <h5>Motivo de consulta</h5>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="motivo de la Consulta"
                name="motivoConsulta"
                maxLength={30}
                minLength={1}
                {...register("motivoConsulta", {
                  required: "El motivo de la consulta es un campo obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.motivoConsulta?.message}
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="input-tel">
              <Form.Label>
                <h5>teléfono</h5>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="3815623596"
                name="telefono"
                minLength={10}
                maxLength={10}
                {...register("telefono", {
                  required: "El telefono es un campo obligatorio",
                  pattern: {
                    value: telefonoPattern,
                    message: "el formato no es valido. Introduzca un número de telefono en formato 999 9 999 999"
                  }
                })}
              />
              <Form.Text className="text-danger">
                {errors.telefono?.message}
            </Form.Text>
              {/* {errors.telefono && <span>{errors.telefono.message}</span>} */}
            </Form.Group>

            <Button type="submit">Crear Turno</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AdministrarTurnos;
