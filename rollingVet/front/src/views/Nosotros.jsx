import React from 'react'
import AvatarCard from '../components/AvatarCard'
import CardBody from 'react-bootstrap/esm/CardBody';
import '../App.css'
import '../estilos/nosotros.css'
import FelipeAvatar from "../assets/media/FelipeAvatar.jpg"
import AlbertoAvatar from "../assets/media/AlbertoAvatar.jpeg"
import LuciaAvatar from "../assets/media/LuciaAvatar.jpeg"
const Nosotros = () => {



  let devs = [
    {
      nombre: "Alberto Mainardi",
      descripcion: "Desarrollador FullStack",
      imagen: AlbertoAvatar
    },
    {
      nombre: "Lucia Craven Garat",
      descripcion: "Desarrollador FullStack",
      imagen: LuciaAvatar
    },
    {
      nombre: "Felipe Raúl Sarco",
      descripcion: "Desarrollador FullStack",
      imagen: FelipeAvatar
    }
  ];

  return (
    <main className='d-flex flex-column bg-color1 bg-nosotros'>
      <section className='p-4 bg-color1-50'>
      <h1 className='texto-color1 font-title mt-4'>Acerca de Nosotros</h1>
      
        <article className='m-4'>

          <p className='mx-4 fs-5 text-center '>Somos el equipo desarrollador de la web de RollingVet, nos centramos en el trabajo en equipo basado en la comunicacion, respeto y organizacion. Juntos esperamos brindarte el mejor servicio para que puedas cuidar a tus mascotas de la mejor manera desde la comodidad de tu casa. Gracias por confiar en nosotros.
          </p>
        </article>

        <article className='my-4'>
          <h2 className='my-4 texto-color1 font-title'>Nuestros Profesionales</h2>
          <div className='d-flex flex-column align-items-center justify-content-center flex-md-row'>
            {devs.map((dev,index) => {
              return <AvatarCard key={`avatarCard${index}`} nombre={dev.nombre} descripcion={dev.descripcion} imagen={dev.imagen} />
            })}
          </div>

        </article>
      </section>


    </main>
  )
}

export default Nosotros