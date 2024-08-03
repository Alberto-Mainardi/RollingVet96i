import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardServicios() {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{props.servicio}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Img variant="top" src="holder.js/100px180" />
    </Card>
  );
}

export default CardServicios;