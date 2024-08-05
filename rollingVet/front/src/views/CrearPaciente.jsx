import React, { useEffect,useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { actualizarPaciente, traerUnPaciente } from '../utils'
import Swal from 'sweetalert2'
const CrearPaciente = () => {
    const { handleSubmit, register, formState: { errors }, reset,setValue } = useForm()
    const navigate = useNavigate();
    const params = useParams();
    
    const updatePaciente = async (obj) => {
        
        let paciente = await traerUnPaciente(params.id);
        paciente.nombre = obj.nombre
        paciente.apellido = obj.apellido
        paciente.email = obj.email
        paciente.telefono = obj.telefono
        let pacienteActualizado = await actualizarPaciente(params.id,paciente);
        if(!paciente){
            Swal.fire({
                title: "Oops!",
                text: "Algo salio mal. Intente nuevamente.",
                icon: "error"
              });
        }
        else{
            let timerInterval;
            Swal.fire({
                title: "Paciente Actualizado!",
                text: "Volviendo a Administrador de Pacientes...",
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
                  navigate('/admin/gestionPacientes');
                 
              }
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log("I was closed by the timer");
                }
              });
        }
    };

    

    useEffect(()=>{
        const leerPaciente = async()=>{
            
            if(params.id){
                let  paciente = await traerUnPaciente(params.id);
                setValue("nombre",paciente.nombre);
                setValue("apellido",paciente.apellido);
                setValue("email",paciente.email);
                setValue("telefono",paciente.telefono);
            }
          }
        leerPaciente();
    },[])

    return (
        <main>
            <h1>Agregar Paciente</h1>
            <Form onSubmit={handleSubmit(updatePaciente)}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control  type="text"  {...register("nombre",{required:"Este campo es obligatorio"})} />
                    <Form.Text className='text-danger'>
                        {errors.nombre?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type='text'  {...register("apellido",{required:"Este campo es obligatorio"})} />
                    <Form.Text className='text-danger'>
                        {errors.apellido?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email'  {...register("email",{required:"Este campo es obligatorio"})} />
                    <Form.Text className='text-danger'>
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type='number'  {...register("telefono",{required:"Este campo es obligatorio"})} />
                    <Form.Text className='text-danger'>
                        {errors.telefono?.message}
                    </Form.Text>
                </Form.Group>

                <Button>Cancelar</Button>
                <Button type="submit">Guardar</Button>
            </Form>
        </main>
    )
}

export default CrearPaciente