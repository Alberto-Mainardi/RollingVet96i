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
import '../App.css'
import '../estilos/planes.css'
const Planes = () => {
  const [validated, setValidated] = useState(false);
  const formEmail = useRef();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    sendEmail(event);
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
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <main className=' d-flex justify-content-center p-4 bg-color1 planes-background'>
      <div className='w-100 rounded-4 p-4 d-flex flex-column  align-items-center bg-formulario'>

      
      <h1 className='font-title'>Informacion de Planes</h1>
      <section className='w-75  mt-4 pt-4'>
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
                  <Form.Control required type="number" placeholder='Telefono' ></Form.Control>
                </InputGroup>

              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" className=''>Enviar</Button>
        </Form>
      </section>
      </div>
    </main>
  );
}


export default Planes