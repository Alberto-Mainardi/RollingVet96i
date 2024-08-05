import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import CardServicios from "../components/CardServicios";
import CardPlanes from "../components/CardPlanes";
import { Link } from "react-router-dom";
import "../estilos/inicio.css";
import ImageCardProf from "../components/ImageCardProf";
import ImageCardEncabezado from "../components/ImageCardEncabezado";

//import "@fortawesome/fontawesome-svg-core/styles.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Inicio = () => {
  let servicios = [
    {
      especialidad: "Medicina interna",
      src: "https://www.vetland.es/wp-content/uploads/2015/10/esp-interna1.jpg",
    },
    {
      especialidad: "Cirujias",
      src: "https://sutuvet.com/wp-content/uploads/2021/10/BLOG_SUTUVET_CIRUGIAS_MAS_COMUNES_EN_PERROS-1200x605.jpg",
    },
    {
      especialidad: "Castración",
      src: "https://www.tafiviejo.gob.ar/fotos/cache/notas/2021/07/02/830x465_210702104336_81488.jpeg",
    },
    {
      especialidad: "Microchip",
      src: "https://e1.nmcdn.io/anicira/wp-content/uploads/2021/03/shutterstock_1556692991-scaled.jpg/v:1-width:600-height:411-fit:cover/shutterstock_1556692991-scaled.jpg?signature=9bc6bef6",
    },
    {
      especialidad: "Vacunación",
      src: "https://www.hola.com/horizon/landscape/9596d3906e29-vacunas-conejos-obligatorias-t.jpg",
    },
    {
      especialidad: "Rayos x",
      src: "https://www.club-caza.com/img/article/z/jd9bvg7y.webp",
    },
  ];
  //console.log(servicios);

  let planes = [
    {
      nombre: "PRIMEROS PASOS",
      descripcion: "0 A 5 AÑOS",
      src: "https://www.lavanguardia.com/files/image_449_220/uploads/2017/11/18/5fa3db4ecb8ea.jpeg",
    },
    {
      nombre: "MADURANDO",
      descripcion: "5 A 10 AÑOS",
      src: "https://blog.terranea.es/wp-content/uploads/2022/07/como-tener-perro-gato-juntos.jpg",
    },
    {
      nombre: "ADULTOS",
      descripcion: "10 AÑOS O MÁS",
      src: "https://t2.ea.ltmcdn.com/es/posts/7/0/4/5_consejos_para_la_convivencia_entre_perros_y_gatos_7407_orig.jpg",
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

  let datosEncabezado = {
    direc1: "Sucursal 1: General Paz 345",
    direc2: "Sucursal 2: Las Piedras 2568",
    titulo: "PRIMERA REVISIÓN GRATUITA",
    imagen:
      "https://www.galachoveterinarios.com/wp-content/uploads/2016/03/IMG_5701x-min-1903x1050.jpg",
  };
  console.log(datosEncabezado);

  return (
    <>
      <section className="container justify-content-center">
        <div className="encabezado row">
          <ImageCardEncabezado
            className="col-md-2"
            direc1={datosEncabezado.direc1}
            direc2={datosEncabezado.direc2}
            titulo={datosEncabezado.titulo}
            imagen={datosEncabezado.imagen}
          />
        </div>

        <div className="cuidadoYcariño row justify-content-center">
          <div className="seccion2 col-md-10 col-sm-12">
            <div>{/* <FontAwesomeIcon icon="fa-thin fa-paw" /> */}</div>
            <p>CUIDADO Y CARIÑO EN CADA VISITA</p>

            <Button as={Link} to="/contacto" variant="dark">
              CONTACTO
            </Button>
          </div>
        </div>

        <div className="servicios">
          <h1>NUESTROS SERVICIOS</h1>

          <div className=" row justify-content-center">
            {servicios.map((servicio, index) => {
              return (
                <CardServicios
                  className="cardServicio"
                  key={`CardServicios${index}`}
                  servicio={servicio}
                />
              );
            })}
          </div>
        </div>

        <div className="profesionales">
          <div className="row">
            <ImageCardProf
              className="imgProfesionales col-md-8 col-sm-12"
              titulo={profesionales[0].titulo}
              texto={profesionales[0].texto}
              imagen={profesionales[0].imagen}
            />
          </div>
        </div>

        <div className="productos">
          <h1>NUESTROS PRODUCTOS</h1>

          <div className="row">
            <div className="d-flex flex-column justify-content-center col-md-4 col-sm-8">
              <Button>ALIMENTOS BALANCEADOS</Button>
              <div className="d-flex justify-content-center mt-3">

              <Image
                className="publicidad"
                src="https://images.ctfassets.net/qp85kbzn8noe/20KzCDy1A3YWdwH2zH5HvV/f7df56255378539cd4ed1c2cd7618fc5/PED_Gutes_Geben_Puppy_Banner_500x320_1_.jpg"
              ></Image>
              </div>
            </div>
            <div className="d-flex flex-column col-md-4 col-sm-8">
              <Button>HIGIENE</Button>
              <div className="d-flex justify-content-center mt-3">

              <Image
                className="publicidad"
                src="https://danaturaldog.com/cdn/shop/files/diseno-sin-titulo-_1__optimized.png?v=1686118758"
              ></Image>
              </div>
            </div>
            <div className="d-flex flex-column col-md-4 col-sm-8">
              <Button>ENTRENAMIENTO</Button>
              <div className="d-flex justify-content-center mt-3">

              <Image
                className="publicidad"
                src="https://purina.com.mx/sites/default/files/styles/webp/public/2024-02/mejores-juguetes-para-perros-dentalife.jpg.webp?itok=gW5DkaSo"
              ></Image>
              </div>
            </div>
          </div>
            <br />
          <Button as={Link} to="/error">
            VER MÁS
          </Button>
        </div>

        <div className="planes">
          <h1>NUESTROS PLANES DE SALUD</h1>
          <div className=" row justify-content-center">
            {planes.map((plan, index) => {
              return (
                <CardPlanes
                  className="cardPlanes"
                  key={`CardPlanes${index}`}
                  plan={plan}
                />
              );
            })}
          </div>
        </div>

        <div className="comunidad">
          <h1>NUESTRA COMUNIDAD</h1>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
