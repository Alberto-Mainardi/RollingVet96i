import { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { ContextoUsuario } from '../components/ContextoUsuario';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import '../estilos/ingresar.css'
function Ingresar({ ingresoPaciente }) {

  const { user, setUser } = useContext(ContextoUsuario);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const ingresar = async (obj) => {
    try {
      console.log(obj);
      let ingreso = await ingresoPaciente(obj);
      console.log(ingreso);
      if (!ingreso) {
        Swal.fire({
          icon: "error",
          title: "Inicio de sesión fallido",
          text: "el correo o contraseña son incorrectos.",
        });
      } else {
        let timerInterval;
        Swal.fire({
          title: "Sesión Iniciada Exitosamente!",
          text: "En breves te redireccionaremos a la página principal",
          icon: "success",
          timer: 1400,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
            navigate('/');
            setUser(
              {
                "id": ingreso.id,
                "nombre": ingreso.nombre,
                "apellido": ingreso.apellido,
                "email": ingreso.email,
                "telefono": ingreso.telefono,
                "estado": ingreso.estado,
                "mascotasIDs": ingreso.mascotasIDs,
                "admin": ingreso.admin,
              }

            );
            localStorage.setItem("user", JSON.stringify(ingreso));
          }
        });
      }
      reset();
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <main className="main d-flex justify-content-around align-items-center flex-wrap bg-ingresar w-100">
      <section className='ingresarContainer' style={{ maxWidth: "768px" }}>
        <Form onSubmit={handleSubmit(ingresar)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresar email"
              {...register("email",
                { required: "El email es un campo obligatorio" }
              )} />

            <Form.Text className="text-muted">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              autoComplete='false'
              {...register("clave",
                { required: "La contraseña es un campo obligatorio" }
              )} />
            <Form.Text className="text-muted">
              {errors.clave?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </section>
    </main>
  );
}

export default Ingresar;