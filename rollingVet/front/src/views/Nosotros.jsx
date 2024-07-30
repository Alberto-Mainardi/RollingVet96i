import React from 'react'
import AvatarCard from '../components/AvatarCard'
import CardBody from 'react-bootstrap/esm/CardBody';
import '../App.css'
const Nosotros = () => {



  let devs = [
    {
      nombre: "Alberto Mainardi",
      descripcion: "Desarrollador FullStack"
    },
    {
      nombre: "Lucia Craven Garat",
      descripcion: "Desarrollador FullStack"
    },
    {
      nombre: "Felipe Raúl Sarco",
      descripcion: "Desarrollador FullStack"
    }
  ];

  return (
    <main className='d-flex flex-column mt-4 bg-color1'>
      <h1 className='texto-color1'>Acerca de Nosotros</h1>
      <section>
        <article className='m-4'>

          <p className='mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti dolor consequatur odio vel magnam, pariatur repellendus, nesciunt nisi recusandae alias ad. Deleniti vitae neque eos atque. Saepe, dolorum exercitationem.
            Nisi minima possimus accusantium recusandae sunt nobis ratione eveniet quos ipsam consequatur ab, vero unde officiis aut saepe consequuntur aspernatur, quisquam officia? Distinctio eligendi dolorem quis animi aperiam laborum perferendis.
          </p>
        </article>

        <article className='my-4'>
          <h2 className='my-4 texto-color1'>Integrantes</h2>
          <div className='d-flex flex-column align-items-center justify-content-center flex-md-row'>
            {devs.map((dev,index) => {
              return <AvatarCard key={`avatarCard${index}`} nombre={dev.nombre} descripcion={dev.descripcion} />
            })}
          </div>

        </article>
      </section>


    </main>
  )
}

export default Nosotros