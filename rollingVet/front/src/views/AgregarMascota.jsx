import { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { ContextoUsuario } from '../components/ContextoUsuario';

const agregarMascota = ({ crearMascota, modificarPaciente }) => {
    const { user, setUser } = useContext(ContextoUsuario);

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const realizarMascota = async (obj) => {
        const mascota = obj;
        let mascotaNueva = {
            nombre: mascota.nombre,
            especie: mascota.especie,
            raza: mascota.raza,
            propietarioID: user.id
        }
        console.log(mascotaNueva);

        let creandoMascota = await crearMascota(mascotaNueva);
        const { data } = creandoMascota;
        console.log(data);

        user.mascotasIDs.push(data.id);
        setUser(user);
        let modificandoPaciente = await modificarPaciente(user.id, user);
        console.log(modificandoPaciente);

        Swal.fire({
            title: "Mascota Creada Exitosamente!",
            text: "",
            icon: "success"
        });
        reset()
    }


    return (
        <div>
            <Form onSubmit={handleSubmit(realizarMascota)}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el nombre de tu mascota"
                        {...register("nombre", { required: "El nombre es un campo obligatorio." })}
                    />
                    <Form.Text className="text-muted">
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEspecie">
                    <Form.Label>Especie</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la especie de tu mascota. por ejemplo, gato."
                        {...register("especie", { required: "La especie es un campo obligatorio." })}
                    />
                    <Form.Text className="text-muted">
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRaza">
                    <Form.Label>Raza</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la raza de tu mascota."
                        {...register("raza", { required: "La raza es un campo obligatorio." })}
                    />
                    <Form.Text className="text-muted">
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="success" type="submit">
                    Añadir Mascota!
                </Button>
            </Form>
            <Button variant="primary" type="submit">
                <NavLink className="nav-link" to="../userpage">
                    Volver a Mi Cuenta
                </NavLink>
            </Button>
        </div>
    )
}

export default agregarMascota