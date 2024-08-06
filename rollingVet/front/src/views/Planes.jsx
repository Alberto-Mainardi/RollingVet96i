import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';
import InputGroup from 'react-bootstrap/InputGroup';
import userLogo from '../assets/media/userLogo.svg'
import telefonoLogo from '../assets/media/telefonoLogo.svg'
import Container from 'react-bootstrap/Container';
import {useForm} from 'react-hook-form'
import '../App.css'
import '../estilos/planes.css'
import Swal from 'sweetalert2';


const Planes = () => {
  const [validated, setValidated] = useState(false);
  const formEmail = useRef();
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      sendEmail(event);
    }

    setValidated(true);
    
    
  };



  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_oaap0mb', 'template_ya17bcw', formEmail.current, {
        publicKey: 'RSYQSmaGDYQ5e5OSO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Formulario enviado!",
            text: "Nos pondremos en contacto contigo pronto. Muchas gracias.",
            icon: "success"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            title: "Oops!",
            text: "Se produjo un error. Intente nuevamente.",
            icon: "error"
          });
        },
      );
  };

  return (
    <main className=' d-flex justify-content-center  bg-color1 planes-background'>
      <div className='w-100 p-4 d-flex flex-column align-items-center bg-color1-50'>

      
      <h1 className='font-title'>Informacion de Planes</h1>
      <section className='mt-4 pt-4'>
        <p className='m-xl-4 text-center text-wrap font-title'>Completa este formulario y nos contactaremos contigo para darte toda la informacion de este plan.</p>
        <Form className=' p-xl-4 m-xl-4' ref={formEmail} noValidate validated={validated} onSubmit={handleSubmit}>

          <Row className="mb-3">
            <Col xl={{span:6, offset:3}}>

              <Form.Group className='text-start' controlId="validationCustom01">
                <Form.Label>Nombre y Apellido</Form.Label>
                <InputGroup>

                  <InputGroup.Text>
                    <img src={userLogo} alt="" />
                  </InputGroup.Text>
                  <Form.Control
                    minLength={2}
                    required
                    type="text"
                    placeholder="Nombre y Apellido"
                    name="user_name"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className='text-start my-4' controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text className='fw-bold fs-5'>
                    @
                  </InputGroup.Text>
                  <Form.Control
                    required
                    minLength={2}
                    type="email"
                    placeholder="Email"
                    name="user_email"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className='text-start'>
                <Form.Label >Telefono</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <img src={telefonoLogo} alt="telefonoLogo" />
                  </InputGroup.Text>
                  <Form.Control minLength={2} required type="number" placeholder='Telefono' ></Form.Control>
                </InputGroup>

              </Form.Group>
            </Col>
          </Row>

          <Button variant='dark' type="submit" className=''>Enviar</Button>
        </Form>
      </section>
      </div>
    </main>
  );
}


export default Planes