import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ContextoUsuario } from "../components/ContextoUsuario";
import "../estilos/agregarMascota.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const agregarMascota = ({ crearMascota, modificarPaciente }) => {
  
  const { user, setUser } = useContext(ContextoUsuario);



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const realizarMascota = async (obj) => {
    const mascota = obj;
    let mascotaNueva = {
      nombre: mascota.nombre,
      especie: mascota.especie,
      raza: mascota.raza,
      propietarioID: user.id,
    };

    let creandoMascota = await crearMascota(mascotaNueva);
    const { data } = creandoMascota;

    user.mascotasIDs.push(data.id);
    setUser(user);
    
    let modificandoPaciente = await modificarPaciente(user.id, user);

    Swal.fire({
      title: "Mascota Creada Exitosamente!",
      text: "",
      icon: "success",
    });
    reset();
  };

  const textoPattern = /^[a-zA-Z]+$/;

  return (
    <main className="bg-agregarMascota w-100">
      <section
        className="agregarMascotaContainer"
        style={{ maxWidth: "768px" }}
      >
        <Form onSubmit={handleSubmit(realizarMascota)}>
          <Form.Group className="mb-3 text-start" controlId="formBasicNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              maxLength={30}
              minLength={1}
              placeholder="Ingresa el nombre de la mascota"
              {...register("nombre", {
                required: "El nombre es un campo obligatorio.",
                pattern: {
                  value: textoPattern,
                  message:
                    "El formato no es valido. Introduzca un nombre que sólo contenga caracteres alfabéticos",
                },
              })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 text-start" controlId="formBasicEspecie">
            <Form.Label>Especie</Form.Label>

            <Form.Select>
              <option value="">Canina</option>
              <option value="">Felina</option>
              <option value="">Ave</option>
              <option value="">Conejo</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 text-start" controlId="formBasicRaza">
            <Form.Label>Raza</Form.Label>
            <Form.Control
              type="text"
              name="raza"
              maxLength={30}
              minLength={5}
              placeholder="Ingresa la raza de la mascota."
              {...register("raza", {
                required: "La raza es un campo obligatorio.",
                pattern: {
                  value: textoPattern,
                  message:
                    "El formato no es valido. Introduzca una raza que sólo contenga caracteres alfabéticos",
                },
              })}
            />
            <Form.Text className="text-muted">{errors.raza?.message}</Form.Text>
          </Form.Group>
          <div className="d-flex justify-content-evenly mt-5">
            <Button variant="success" type="submit">
              Añadir Mascota!
            </Button>
            <Button variant="primary">
              <NavLink className="nav-link" to="../userpage">
                Volver a Mi Cuenta
              </NavLink>
            </Button>
          </div>
        </Form>
      </section>
    </main>
  );
};

export default agregarMascota;
