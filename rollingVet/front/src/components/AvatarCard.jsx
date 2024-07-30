import React from 'react'
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import 'bootstrap/dist/css/bootstrap.min.css'
const AvatarCard = (props) => {
  return (
    <Card className='mt-4 mb-2 mx-md-4 d-flex align-items-center rounded-4'>
        <Card.Body className='bg-Card rounded-4'>
        <Card.Title className='my-2'>{props.nombre}</Card.Title>
        <Card.Img  className='w-75 rounded-4' variant='top' src='https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?size=338&ext=jpg'/>
        
            <Card.Text className='mt-4'>{props.descripcion}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default AvatarCard