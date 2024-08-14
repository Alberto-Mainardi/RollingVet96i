import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForm from "../components/WeatherForm";
import DataCard from "../components/DataCard";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Error from "../components/Error";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import CardServicios from "../components/CardServicios";
import CardPlanes from "../components/CardPlanes";
import { Link } from "react-router-dom";
import "../estilos/inicio.css";
import ImageCardProf from "../components/ImageCardProf";
import ImageCardEncabezado from "../components/ImageCardEncabezado";
import ComentariosCard from "../components/ComentariosCard";

const Inicio = () => {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);

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
      titulo: "Nuestros Profesionales",
      texto:
        "Somos el equipo desarrollador de la web de RollingVet, nos centramos en el trabajo en equipo basado en la comunicacion, respeto y organizacion. Juntos esperamos brindarte el mejor servicio para que puedas cuidar a tus mascotas de la mejor manera desde la comodidad de tu casa. Gracias por confiar en nosotros.",
      imagen:
        "https://www.spmas.es/wp-content/uploads/2023/06/Clinica-veterinaria.jpg",
    },
  ];

  let datosEncabezado = {
    direc1: "Sucursal 1: General Paz 345",
    direc2: "Sucursal 2: Las Piedras 2568",
    titulo: "Primera Revisión Gratuita",
    imagen:
      "https://www.galachoveterinarios.com/wp-content/uploads/2016/03/IMG_5701x-min-1903x1050.jpg",
  };

  let comentarios = [
    {
      opinion:
        "La experiencia en Rolling Vet fue increíble. Mi mascota recibió una atención personalizada y cariñosa que la hizo sentir muy cómoda. El equipo veterinario es amable y muy profesional, explicando todo con claridad y resolviendo todas mis dudas. ¡Sin duda los recomiendo!",
      puntuacion: "5",
    },
    {
      opinion:
        "Necesitaba atención de emergencia para mi gato y Rolling Vet fue mi salvación. Me atendieron de inmediato, realizaron todos los exámenes necesarios y me dieron un diagnóstico preciso. La rapidez y eficiencia con la que trabajaron me dejó muy tranquila. ¡Excelente servicio!",
      puntuacion: "4",
    },
    {
      opinion:
        "Además de la atención veterinaria básica, en Rolling Vet ofrecen una gran variedad de servicios adicionales como peluquería y adiestramiento. Mi perro salió feliz y reluciente después de su visita. ¡Es una clínica completa y muy cómoda para las mascotas!",
      puntuacion: "4.5",
    },
  ];

  return (
    <main>
      <section className="container justify-content-center">
        <div className="container my-5">
          <h1 className="font-title">Rolling Vet</h1>
        </div>

        <div className="encabezado row mx-auto">
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
            <h1 className="font-title">Cuidado y Cariño en Cada Visita</h1>

            <Button as={Link} to="/contacto" variant="dark">
              CONTACTO
            </Button>
          </div>
        </div>

        <div className="servicios">
          <h1 className="font-title">Nuestros Servicios</h1>

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
          <h1 className="font-title">Nuestros Productos</h1>

          <div className="row align-items:center">
            <div className="d-flex flex-column justify-content-center col-md-4 col-sm-8 mx-auto">
              <Button className="mt-4">ALIMENTOS BALANCEADOS</Button>
              <div className="d-flex justify-content-center mt-3">
                <Image
                  className="publicidad"
                  src="https://images.ctfassets.net/qp85kbzn8noe/20KzCDy1A3YWdwH2zH5HvV/f7df56255378539cd4ed1c2cd7618fc5/PED_Gutes_Geben_Puppy_Banner_500x320_1_.jpg"
                ></Image>
              </div>
            </div>
            <div className="d-flex flex-column col-md-4 col-sm-8 mx-auto">
              <Button className="mt-4">HIGIENE</Button>
              <div className="d-flex justify-content-center mt-3">
                <Image
                  className="publicidad"
                  src="https://danaturaldog.com/cdn/shop/files/diseno-sin-titulo-_1__optimized.png?v=1686118758"
                ></Image>
              </div>
            </div>
            <div className="d-flex flex-column col-md-4 col-sm-8 mx-auto">
              <Button className="mt-4">ENTRENAMIENTO</Button>
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
          <h1 className="font-title">Nuestros Planes de Salud</h1>
          <div className=" row justify-content-center">
            {planes.map((plan, index) => {
              return (
                <CardPlanes
                  className="planesCard"
                  key={`CardPlanes${index}`}
                  plan={plan}
                />
              );
            })}
          </div>
        </div>

        <div className="comunidad">
          <h1 className="font-title">Nuestra Comunidad</h1>
          <div className="row justify-content-center">
            {comentarios.map((comentario, index) => {
              return (
                <ComentariosCard
                  className="cardComentarios"
                  key={`comentariosCard${index}`}
                  comentario={comentario}
                />
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-center m-5">
          <div className="">
            <h2 className="font-title">Clima</h2>
            
          {/* <div className="weatherCard">
            {!error ? (
              <DataCard weatherData={weatherData}></DataCard>
            ) : (
              <Error />
            )}
            <WeatherForm
              setWeatherData={setWeatherData}
              setError={setError}
            ></WeatherForm>
          </div>*/}
          </div> 
          
        </div>

      </section>
    </main>
  );
};

export default Inicio;
