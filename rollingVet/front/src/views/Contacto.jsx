import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Sucursales from '../components/Sucursales';
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
const Contacto = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

  }

  let sucursales = [
    {
      id: 1,
      mapa: <div><iframe className='rounded-4 sucursal-map my-4' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28488.175275016787!2d-65.245754!3d-26.807431000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cfdaa3e3c59%3A0xc9e31434729ba71c!2sVETERINARIA%20DEL%20SOL!5e0!3m2!1ses-419!2sar!4v1722549030787!5m2!1ses-419!2sar"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>,
      direccion: "Av.Belgrano 3504",
      telefono: 3815265896,

    },
    {
      id: 2,
      mapa: <div><iframe className='rounded-4 w-75 w-md-100 my-4' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28488.175275016787!2d-65.245754!3d-26.807431000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d02f6e23949%3A0xa79f1023e3ffe221!2sVeterinaria%20Del%20Sol!5e0!3m2!1ses-419!2sar!4v1722548983314!5m2!1ses-419!2sar" width="400" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>,
      direccion: "Av.America 1186",
      telefono: 3815265896,
    }
  ];
  return (
    <main className='d-flex flex-column mt-4 bg-color1'>
      <h1>Contactanos</h1>
      {sucursales.map((sucursal, index) => { return <Sucursales key={`Sucursal${index}`} sucursal={sucursal} /> })}

      <section className='m-4'>
        <article className='d-flex flex-column align-items-center'>
          <h2 className='p-2'>TE BRINDAMOS LOS MEJORES PLANES DE SALUD Y PREVENCION PARA TU MASCOTA</h2>
          <p>Completa nuestro formulario y recibiras un mail con toda la informacion que necesitás</p>
          <Form className='bg-sucursal rounded-4 m-4 w-100 p-3 text-start d-flex flex-column'>

            <Form.Group className='my-4' as={Col} xs={"auto"}>
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control type="nombre" placeholder="Ingresa tu nombre" {...register("nombre", { required: "Este es un campo obligatorio" })} />
              <Form.Text>
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className='my-4'>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" {...register("email", { required: "Este es un campo obligatorio" })} />
              <Form.Text>
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className='my-4'>
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="telefono" placeholder="Ingresa tu telefono" {...register("telefono", { required: "Este es un campo obligatorio" })} />
              <Form.Text>
                {errors.telefono?.message}
              </Form.Text>
            </Form.Group>

            <Button className='mt-4 w-50 align-self-center'>Enviar</Button>

          </Form>
        </article>
      </section>



    </main>
  )
}

export default Contacto