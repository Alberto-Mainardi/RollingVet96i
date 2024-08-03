import React from "react";
import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const WeatherForm = ({setWeatherData, setError}) => {

  const [ipAddress, setIpAddress] = useState('');
  const [geoInfo, setGeoInfo] = useState('');

  const [city, setCity] = useState('Loading...');
  const [country, setCountry] = useState('');
  const API = 'cdc4af86410ab9b8c2ace34ea361fcb7'


  useEffect(() => {
    getIPDispositivo();
  }, [])

  useEffect(() => {
    fetchIPInfo()
  }, [])

  useEffect(() => {
     queryAPI();
  }, []);

  const getIPDispositivo = async () => {
    try {
      const response = await fetch('https://api.ipify.org/');
      const data = await response.text();
      //Guardar la dirección IP
      setIpAddress(data);
      return data;
    } catch (error) {
      console.error("no se pudo conseguir la ip:", error);
    }
  }
  const fetchIPInfo = async () => {
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
      const data = await response.json()
      
      setGeoInfo(data);
      setCity(data.city);
      setCountry(data.country)
      console.log(data);
      queryAPI(data.city, data.country);
    } catch (error) {
      console.error("no se pudo conseguir la información de la ubicación:", error);
    }
  }

  
  const queryAPI = async (city, country) =>{
    try{
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&appid=${API}&units=metric`)
        const data = await response.json();
        if(response.status === 200){
          setWeatherData(data);
          setError(false)
        }else{
          setError(true)
        }
    }catch(error)
    {
        console.log('error al consultar la api')
        console.log(error);
        
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(city, country);
    queryAPI(city, country);
  }

  return (
    <section className="text-light">
      <h1>Clima App <i className="bi bi-cloud-sun"></i></h1>
      <Form className="my-5" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa una ciudad"
                required
                minLength={3}
                maxLength={50}
                onChange={(e)=> setCity(e.target.value)}
                value={city}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCountry">
              <Form.Label>Codigo de pais</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa un codigo de pais ej: AR"
                required
                minLength={2}
                maxLength={3}
                onChange={(e)=>setCountry(e.target.value)}
                value={country}
                
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="danger" type="submit" className="mb-3">
          Buscar
        </Button>
      </Form>
    </section>
  );
};

export default WeatherForm;