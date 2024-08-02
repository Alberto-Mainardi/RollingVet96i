import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import wpLogo from '../assets/media/whatsappLogo.svg'
import ubicacionLogo from '../assets/media/ubicacionLogo.svg'
import calendarioLogo from '../assets/media/calendarioLogo.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

const Sucursales = (props) => {
    let sucursal = props.sucursal;
    return (
        <div className='m-4 bg-sucursal rounded-4'>
            <h2 className='my-4'>Sucursal {sucursal.id}</h2>
            <article id='sucursalContainer'>
                {sucursal.mapa}
                <Container fluid >

                    <Row>
                        <Col  className='p-2'> 
                            <img className='logos-lg' src={ubicacionLogo} alt="ubicacionLogo" />
                            <p>{sucursal.direccion}</p>
                        </Col>

                        <Col lg={{order:'last',span:12}} xl="auto" >
                            <img className='logos-lg' src={calendarioLogo} alt="calendarioLogo" />
                            <p className='text-center'>Lunes a Viernes: 9:00 a 20:00 hs <br /> Sabado: 9:00 a 14:00 hs</p>
                        </Col>

                        <Col  className='p-2'  xxl={{order:'last'}} >
                            <img className='logos-lg' src={wpLogo} alt="whatsappLogo" />
                            <p>{sucursal.telefono}</p>
                        </Col>
                    </Row>


                </Container>
            </article>
        </div>
    )
}

export default Sucursales