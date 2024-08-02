import { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { ContextoUsuario } from '../components/ContextoUsuario';
import Swal from 'sweetalert2'
function Ingresar({ingresoPaciente}) {

  const {user, setUser} = useContext(ContextoUsuario);
  const {register, handleSubmit, formState:{errors}, reset} = useForm();
  const ingresar = async (obj) => {
    try {
      console.log(obj);
      let ingreso = await ingresoPaciente(obj);
      console.log(ingreso);
      if (!ingreso) {
        console.log("usuario incorrecto");
      } else {
        setUser(
          {
              "id": ingreso.id,
              "nombre": ingreso.nombre,
              "apellido": ingreso.apellido,
              "email": ingreso.email,
              "telefono": ingreso.telefono,
              "estado":ingreso.estado,
              "mascotasIDs":ingreso.mascotasIDs,
              "admin":ingreso.admin,
            }
      )
        Swal.fire({
          title: "Sesión Iniciada Exitosamente!",
          text: "cool",
          icon: "success"
        });
      }
      reset();
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <main className="main d-flex justify-content-around align-items-center flex-wrap">
    <Form onSubmit={handleSubmit(ingresar)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Ingresar email"
        {...register("email",
          {required:"El email es un campo obligatorio"}
        )}/>

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
        {...register("contraseña",
          {required:"La contraseña es un campo obligatorio"}
        )} />
        <Form.Text className="text-muted">
          {errors.contraseña?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuerdame." name="recuerdame"
        {...register("recuerdame")}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
    </main>
  );
}

export default Ingresar;