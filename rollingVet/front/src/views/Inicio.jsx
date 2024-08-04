import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import CardServicios from "../components/CardServicios";
import CardPlanes from "../components/CardPlanes";
import ImageCard from "../components/ImageCard";
import { Link } from "react-router-dom";
import "../estilos/inicio.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Inicio = () => {
  let servicios = [
    {
      especialidad: "Medicina interna",
      src: "../assets/img.servicios/medicina interna.jpg",
    },
    {
      especialidad: "Cirujias",
    },
    {
      especialidad: "Castración",
    },
    {
      especialidad: "Microchip",
    },
    {
      especialidad: "Vacunación",
    },
    {
      especialidad: "Rayos x",
    },
  ];

  let planes = [
    {
      nombre: "PRIMEROS PASOS",
      descripcion: "0 A 5 AÑOS",
    },
    {
      nombre: "MADURANDO",
      descripcion: "5 A 10 AÑOS",
    },
    {
      nombre: "ADULTOS",
      descripcion: "10 AÑOS O MÁS",
    },
  ];

  let profesionales = [
    {
      titulo: "NUESTROS PROFESIONALES",
      texto:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam exalias pariatur soluta tempora modi, corrupti veniam minimaconsequatur quod eligendi accusamus autem, voluptates sequireiciendis. Non molestias sapiente commodi",
      imagen:
        "https://imagenes.heraldo.es/files/image_1920_1080/uploads/imagenes/2023/10/19/veterinario-gsc1.jpeg",
    },
  ];

  return (
    <>
      <section className="container">
        <div className="carrusel">
          <p>Dirección como link que redirecciona a maps</p>
          <p>381 5623589</p>
          <h1>Primera revisión gratuita</h1>
          <Button as={Link} to="/contacto">
            PEDIR CITA
          </Button>
        </div>

        <div className=" row justify-content-center">
          <div className="seccion2 col-md-8 col-sm-12">
            <div>
              <FontAwesomeIcon icon="fa-thin fa-paw" />
            </div>
            <p>CUIDADO Y CARIÑO EN CADA VISITA</p>

            <Button as={Link} to="/contacto">
              CONTACTO
            </Button>
          </div>
        </div>

        <div className="servicios">
          <h1>NUESTROS SERVICIOS</h1>

          <div className="cardServicio row justify-content-center">
            {servicios.map((servicio, index) => {
              return (
                <CardServicios
                  key={`CardServicios${index}`}
                  servicio={servicio}
                />
              );
            })}
          </div>
        </div>

        <div className="profesionales">
          <div className="row">
            <ImageCard
              className="imgProfesionales col-md-8 col-sm-12"
              titulo={profesionales[0].titulo}
              texto={profesionales[0].texto}
              imagen={profesionales[0].imagen}
            />
          </div>

          <Button>NOSOTROS</Button>
        </div>

        <div>
          <h1>NUESTROS PRODUCTOS</h1>

          <div className="row justify-content-center">
            <div className="d-flex flex-column col-md-4 col-sm-8">
              <Button>ALIMENTOS BALANCEADOS</Button>
              <Image
                className="publicidad"
                src="https://images.ctfassets.net/qp85kbzn8noe/20KzCDy1A3YWdwH2zH5HvV/f7df56255378539cd4ed1c2cd7618fc5/PED_Gutes_Geben_Puppy_Banner_500x320_1_.jpg"
              ></Image>
            </div>
            <div className="d-flex flex-column col-md-4 col-sm-8">
              <Button>HIGIENE</Button>
              <Image
                className="publicidad"
                src="https://danaturaldog.com/cdn/shop/files/diseno-sin-titulo-_1__optimized.png?v=1686118758"
              ></Image>
            </div>
            <div className="d-flex flex-column col-md-4 col-sm-8">
              <Button>ENTRENAMIENTO</Button>
              <Image
                className="publicidad"
                src="https://purina.com.mx/sites/default/files/styles/webp/public/2024-02/mejores-juguetes-para-perros-dentalife.jpg.webp?itok=gW5DkaSo"
              ></Image>
            </div>
          </div>

          <Button as={Link} to="/planes">
            VER MÁS
          </Button>
        </div>

        <div className="">
          <h1>NUESTROS PLANES DE SALUD</h1>
          <div className="planes row justify-content-center">
            {planes.map((plan, index) => {
              return <CardPlanes key={`CardPlanes${index}`} plan={plan} />;
            })}
          </div>
        </div>

        <div>
          <h1>NUESTRA COMUNIDAD</h1>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
