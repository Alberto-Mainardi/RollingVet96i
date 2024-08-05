import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
const ModificarTurno = ({ actualizarTurno, traerUnTurno }) => {

    const { handleSubmit, register, formState: { errors }, reset, setValue } = useForm()
    const navigate = useNavigate();
    const params = useParams();
    const updateTurno = async (obj) => {
        let turno = await traerUnTurno(params.id);
        let {data} = turno;
        data.fecha = obj.fecha
        data.hora = obj.hora
        data.sucursal = obj.sucursal
        data.telefono = obj.telefono
        data.propietario = obj.propietario
        data.mascota = obj.mascota
        data.motivoConsulta = obj.motivoConsulta
        let turnoActualizado = await actualizarTurno(params.id, data);
        if (!data) {
            Swal.fire({
                title: "Oops!",
                text: "Algo salio mal. Intente nuevamente.",
                icon: "error"
            });
        }
        else {
            let timerInterval;
            Swal.fire({
                title: "Turno Actualizado!",
                text: "Volviendo a Administrador de Turnos...",
                icon: "success",
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    timerInterval = setInterval(() => {
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    navigate('/admin/gestionTurnos');

                }
            })
        }
    };

    useEffect(() => {
        const leerTurno = async () => {

            if (params.id) {
                let turno = await traerUnTurno(params.id);
                let {data} = turno;
                console.log(turno);
                
                setValue("fecha", data.fecha);
                setValue("hora", data.hora);
                setValue("sucursal", data.sucursal);
                setValue("propietario", data.propietario);
                setValue("mascota", data.mascota);
                setValue("motivoConsulta", data.motivoConsulta);
                setValue("telefono", data.telefono);
            }
        }
        leerTurno();
    }, [])

    return (
        <main>
            <Form onSubmit={handleSubmit(updateTurno)} method="post">
                <Form.Control
                    type="date"
                    {...register("fecha",
                        { required: "La fecha es un campo obligatorio" }
                    )}
                    className="bg-danger" />
                <Form.Select
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

                <Button type="submit">Modificar Turno</Button>
            </Form>
        </main>
    )
}

export default ModificarTurno