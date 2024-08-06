
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dom';
import "../estilos/CardServicios.css"


function CardServicios({servicio}) {
  const {especialidad, src}=servicio;
  //console.log(src);
  
  return (
    <Card style={{ width: '18rem' }} className='cardServicio'>
      <Card.Img variant="top" src={src} alt={especialidad} className='imgServicios'/>
      <Card.Body>
        <Card.Title>{especialidad}</Card.Title>
        {<Button variant="dark">Ver más</Button>}
      </Card.Body>
    </Card>
  );
}

export default CardServicios;