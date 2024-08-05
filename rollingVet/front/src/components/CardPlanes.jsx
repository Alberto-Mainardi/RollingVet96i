import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../estilos/CardPlanes.css"

function CardPlanes({plan}) {
  const {nombre, descripcion, src} = plan
  return (
    <Card style={{ width: "18rem" }} className="cardPlan">
      <Card.Img variant="top" src={src} className="imgPlanes"/>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Button variant="dark" as={Link} to='/planes'>Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPlanes;
