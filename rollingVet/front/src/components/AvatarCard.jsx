import React from 'react'
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import 'bootstrap/dist/css/bootstrap.min.css'
const AvatarCard = (props) => {
  return (
    <Card className='mt-4 mb-2'>
        <Card.Img  variant='top' src='https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?size=338&ext=jpg'/>
        <Card.Body>
            <Card.Title>{props.nombre}</Card.Title>
            <Card.Text>{props.descripcion}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default AvatarCard