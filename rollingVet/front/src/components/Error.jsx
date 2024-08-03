import React from "react";
import { Card } from "react-bootstrap";

const Error = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          No se encontro la información solicitada<br/>
          <i className="bi bi-cloud-slash fs-1"></i>
        </Card.Title>
        <Card.Text>Intenta con otra ubicacion</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Error;