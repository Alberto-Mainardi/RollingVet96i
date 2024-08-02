import { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Sucursales from '../components/Sucursales';
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import FormContacto from '../components/FormContacto';

const Contacto = () => {



  let sucursales = [
    {
      id: 1,
      mapa: <div><iframe className='rounded-4 w-75 sucursal-map my-4' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28488.175275016787!2d-65.245754!3d-26.807431000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cfdaa3e3c59%3A0xc9e31434729ba71c!2sVETERINARIA%20DEL%20SOL!5e0!3m2!1ses-419!2sar!4v1722549030787!5m2!1ses-419!2sar" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>,
      direccion: "Av.Belgrano 3504",
      telefono: 3815265896,

    },
    {
      id: 2,
      mapa: <div><iframe className='rounded-4 w-75 my-4' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28488.175275016787!2d-65.245754!3d-26.807431000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d02f6e23949%3A0xa79f1023e3ffe221!2sVeterinaria%20Del%20Sol!5e0!3m2!1ses-419!2sar!4v1722548983314!5m2!1ses-419!2sar" width="400" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>,
      direccion: "Av.America 1186",
      telefono: 3815265896,
    }
  ];

  return (
    <main className='d-flex flex-column mt-4 bg-color1'>
      
      {/* {sucursales.map((sucursal, index) => { return <Sucursales key={`Sucursal${index}`} sucursal={sucursal} /> })} */}
      <section className='m-4'>

        <Container fluid>
            <Row xs={1} lg={3}>
              <Col lg={{order:'first'}} className=''>
                <Sucursales sucursal={sucursales[0]} />
              </Col>

              <Col  xs={{order:'first'}}>
                  <h1>Contactanos</h1>
                  <FormContacto/>
              </Col>
              <Col>
                <Sucursales sucursal={sucursales[1]} />
              </Col>
            </Row>

        </Container>



        {/* <article className='d-flex flex-column align-items-center '>
          <h2 className='p-2'>TE BRINDAMOS LOS MEJORES PLANES DE SALUD Y PREVENCION PARA TU MASCOTA</h2>
          <p>Completa nuestro formulario y recibiras un mail con toda la informacion que necesitás</p>

          <FormContacto />
        </article> */}
      </section>



    </main>
  )
}

export default Contacto