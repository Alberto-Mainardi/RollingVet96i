import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import "../estilos/ImageCardProf.css";

function ImageCardProf(props) {
  const { titulo, texto, imagen } = props;
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={imagen} className="imgProf" />
      <Card.ImgOverlay className="d-flex flex-column justify-content-center">
        <Card.Title className="tituloProf font-title">{titulo}</Card.Title>
        <Card.Text className="textoProf">{texto}</Card.Text>

        <div className="d-flex justify-content-center">
          <Button variant="dark" as={Link} to="/nosotros">
            NOSOTROS
          </Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImageCardProf;
