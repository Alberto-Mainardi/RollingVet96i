import React from 'react'
import AvatarCard from '../components/AvatarCard'
import CardBody from 'react-bootstrap/esm/CardBody';

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
      nombre: "Felipe Sarco",
      descripcion: "Desarrollador FullStack"
    }
  ];

  return (
    <main className='d-flex flex-column mt-4'>
      <h1>Acerca de Nosotros</h1>
      <section>
        <article className='my-4'>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corrupti dolor consequatur odio vel magnam, pariatur repellendus, nesciunt nisi recusandae alias ad. Deleniti vitae neque eos atque. Saepe, dolorum exercitationem.
            Nisi minima possimus accusantium recusandae sunt nobis ratione eveniet quos ipsam consequatur ab, vero unde officiis aut saepe consequuntur aspernatur, quisquam officia? Distinctio eligendi dolorem quis animi aperiam laborum perferendis.
          </p>
        </article>

        <article className='my-4'>
          <h2>Integrantes</h2>
          {devs.map((dev)=>{
            return <AvatarCard nombre={dev.nombre} descripcion={dev.descripcion}/>
          })}
        </article>
      </section>


    </main>
  )
}

export default Nosotros