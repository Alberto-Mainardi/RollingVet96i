import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import "../estilos/ImageCardEncabezado.css"

function ImageCardEncabezado(props) {
    const {direc1, direc2, titulo, imagen}=props
  return (
    <Card className="cardEncabezado text-dark">
      <Card.Img src={imagen} className='imgEncabezado'/>
      <Card.ImgOverlay>
        <Card.Title className="direcEncabezado" as={Link} to="https://www.google.com/maps/place/Gral.+Jos%C3%A9+Mar%C3%ADa+Paz+345,+T4000BLG+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n,+Argentina/@-26.8367076,-65.2061498,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c0f443b6851:0x134f53d9667be29a!8m2!3d-26.8367124!4d-65.2035749?authuser=0&entry=ttu" target="_blank">{direc1}</Card.Title>
        <br />
        <Card.Title className="direcEncabezado"as={Link} to="https://www.google.com/maps/place/Combate+de+Las+Piedras+2568,+T4000BSZ+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n,+Argentina/@-26.8284959,-65.2400785,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c6012236379:0x152395c01749a76f!8m2!3d-26.8285007!4d-65.2375036?authuser=0&entry=ttu" target="_blank">{direc2}</Card.Title>
        <Card.Text className='textoRevision font-title'>{titulo}</Card.Text>
        <Button as={Link} to="/contacto" variant="dark">
            PEDIR CITA
          </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImageCardEncabezado;