import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';
import InputGroup from 'react-bootstrap/InputGroup';
import userLogo from '../assets/media/userLogo.svg'
import mensajeLogo from '../assets/media/mensajeLogo.svg'
import '../estilos/contacto.css'
function FormContacto() {
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
            .sendForm('service_jwmw855', 'template_ue7m6oa', formEmail.current, {
                publicKey: '6IexsJMDhf7T84v_8',
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
        <Form className=' p-4 rounded-4 bg-color2-70' ref={formEmail} noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Col>
                
                <Form.Group  className='text-start' controlId="validationCustom01">
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
                <Form.Group  className='text-start my-4' controlId="validationCustom02">
                    <Form.Label>Email</Form.Label>
                <InputGroup>
                    <InputGroup.Text className='fw-bold fs-5'>
                        @
                    </InputGroup.Text>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        name="reply_to"
                    />
                </InputGroup>    
                </Form.Group>
                <Form.Group  className='text-start' controlId="validationCustomUsername">
                    <Form.Label>Mensaje</Form.Label>
                    <InputGroup>
                    <InputGroup.Text>
                        <img src={mensajeLogo} alt="" />
                    </InputGroup.Text>
                    <Form.Control
                        name="message"
                        as="textarea" rows={5}
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    
                    <Form.Control.Feedback type="invalid">
                       Por favor ingrese un mensaje.
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                </Col>
            </Row>

            <Button type="submit" className=''>Enviar</Button>
        </Form>
    );
}

export default FormContacto;