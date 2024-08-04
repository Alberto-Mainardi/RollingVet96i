import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardPlanes({plan}) {
  const {nombre, descripcion} = plan
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Button variant="primary" as={Link} to='/planes'>Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPlanes;
