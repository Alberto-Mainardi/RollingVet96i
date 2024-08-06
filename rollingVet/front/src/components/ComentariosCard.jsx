import Card from 'react-bootstrap/Card';
import "../estilos/ComentariosCard.css"

function ComentariosCard({comentario}) {
    const {opinion, puntuacion} = comentario
  return (
    <Card style={{ width: '18rem' }} className='cardComentarios d-flex flex-column'>
      <Card.Body className='card-body justify-content-center'>
        <Card.Title>Nuestros clientes opinan:</Card.Title>
        <Card.Text className='card-text'>
          {opinion}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Puntuación: {puntuacion}</Card.Subtitle>
        <Card.Link href="https://www.google.com/maps/place/Gral.+Jos%C3%A9+Mar%C3%ADa+Paz+345,+T4000BLG+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n,+Argentina/@-26.8367076,-65.2061498,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c0f443b6851:0x134f53d9667be29a!8m2!3d-26.8367124!4d-65.2035749?authuser=0&entry=ttu" target="_blank">Sucursal General Paz</Card.Link>
        <br />
        <Card.Link href="https://www.google.com/maps/place/Combate+de+Las+Piedras+2568,+T4000BSZ+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n,+Argentina/@-26.8284959,-65.2400785,17z/data=!3m1!4b1!4m5!3m4!1s0x94225c6012236379:0x152395c01749a76f!8m2!3d-26.8285007!4d-65.2375036?authuser=0&entry=ttu" target="_blank">Sucursal Las Piedras</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ComentariosCard;