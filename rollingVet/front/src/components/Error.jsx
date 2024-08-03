import React from "react";
import { Card } from "react-bootstrap";

const Error = () => {
  return (
    <Card className="text-center border-0">
      <Card.Body className="text-white">
        <Card.Title>
          No se encontró la localidad solicitada<br/>
          <i className="bi bi-cloud-slash fs-1"></i>
        </Card.Title>
        <Card.Text>Intenta con otra ubicación</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Error;