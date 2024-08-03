import React from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";

const DataCard = ({ weatherData }) => {
  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title>
          {weatherData.name}{" "}
          <Badge bg="warning" text="dark">
            {weatherData.sys?.country}
          </Badge>
        </Card.Title>
        {weatherData?.weather ? (
          <img
            src={` http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData?.weather[0]?.description}
          />
        ) : null}
        <h2>{weatherData.main?.temp} °C</h2>
        <span className="lead">
          {weatherData?.weather ? weatherData.weather[0].description : null}
        </span>
        <hr />

        <Row>
          <Col>
            <p className="fw-bold">Minima</p>
            <p>{weatherData.main?.temp_min} °C</p>
          </Col>
          <Col>
            <p className="fw-bold">Maxima</p>
            <p>{weatherData.main?.temp_max} °C</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DataCard;