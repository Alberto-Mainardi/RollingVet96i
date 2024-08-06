import React from 'react'
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../estilos/nosotros.css'
const AvatarCard = (props) => {
  return (
    <Card className='mt-4 mb-2 mx-md-4 d-flex align-items-center rounded-4'>
        <Card.Body className='bg-Card rounded-4'>
        <Card.Title className='my-2'>{props.nombre}</Card.Title>
        <Card.Img  className='rounded-4 img-avatar' variant='top' src={props.imagen}/>
        
            <Card.Text className='mt-4'>{props.descripcion}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default AvatarCard