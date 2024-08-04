
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function CardServicios({servicio}) {
  const {especialidad, src}=servicio
  console.log(especialidad);
  return (
    <Card style={{ width: '18rem' }} className=''>
      
      <Card.Body>
        <Card.Title>{especialidad}</Card.Title>
        {<Button variant="primary">Ver más</Button>}
      </Card.Body>
      <Card.Img variant="top" src={src} />
    </Card>
  );
}

export default CardServicios;