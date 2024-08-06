import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import "../estilos/ImageCardProf.css"

function ImageCardProf(props) {
    const {titulo, texto, imagen}=props
  return (
    <Card className="bg-dark text-white">
      <Card.Img  src={imagen} className='imgProf'/>
      <Card.ImgOverlay>
        <Card.Title className='tituloProf'>{titulo}</Card.Title>
        <Card.Text className='textoProf'>
          {texto}
        </Card.Text>
        <Button variant="dark" as={Link} to="/nosotros">NOSOTROS</Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImageCardProf;