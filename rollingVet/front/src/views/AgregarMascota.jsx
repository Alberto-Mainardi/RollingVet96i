import { useContext, useEffect } from "react";
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
      propietarioID: user.uid,
    };

    let creandoMascota = await crearMascota(mascotaNueva);
    const { data } = creandoMascota;
    

    const nuevoUsuario = {
      ...user,
      mascotasIDs:[...user.mascotasIDs, data.mascota.uid]
    }
    console.log(nuevoUsuario);
    setUser(nuevoUsuario);
    localStorage.setItem("user", JSON.stringify(nuevoUsuario));
    await modificarPaciente(user.uid, user);
    
    Swal.fire({
      title: "Mascota Creada Exitosamente!",
      text: "",
      icon: "success",
    });
    reset();
  };

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
              placeholder="Ingresa el nombre de tu mascota"
              {...register("nombre", {
                required: "El nombre es un campo obligatorio.",
              })}
            />
            <Form.Text className="text-muted">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 text-start" controlId="formBasicEspecie">
            <Form.Label>Especie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa la especie de tu mascota. por ejemplo, gato."
              {...register("especie", {
                required: "La especie es un campo obligatorio.",
              })}
            />
            <Form.Text className="text-muted">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 text-start" controlId="formBasicRaza">
            <Form.Label>Raza</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa la raza de tu mascota."
              {...register("raza", {
                required: "La raza es un campo obligatorio.",
              })}
            />
            <Form.Text className="text-muted">
              {errors.email?.message}
            </Form.Text>
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
