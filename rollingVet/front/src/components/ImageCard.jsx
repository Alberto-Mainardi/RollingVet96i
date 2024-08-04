import Card from 'react-bootstrap/Card';

function ImageCard(props) {
    const {titulo, texto, imagen}=props
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={imagen} />
      <Card.ImgOverlay>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {texto}
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImageCard;