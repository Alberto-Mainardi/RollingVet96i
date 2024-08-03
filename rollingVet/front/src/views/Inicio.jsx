import React from "react";
import Button from 'react-bootstrap/Button';
import CardServicios from "../components/CardServicios";

const Inicio = () => {

  let servicios = [
    {
      especialidad: "Medicina interna"
    },
    {
      especialidad: "Cirujias"
    },
    {
      especialidad: "Castración"
    },
    {
      especialidad: "Microchip"
    },
    {
      especialidad: "Vacunación"
    },
    {
      especialidad: "Rayos x"
    }
  ];


  return (
    <>
      <div className="carrusel">
        <p>Dirección como link que redirecciona a maps</p>
        <p>381 5623589</p>
        <h1>Primera revisión gratuita</h1>
        <Button>PEDIR CITA</Button>
      </div>

      <div className="">
        <p>CUIDADO Y CARIÑO EN CADA VISITA</p>
        <Button>CONTACTO</Button>
      </div>

      <div className="servicios">
      {servicios.map((servicio,index) => {
              return <CardServicios key={`cardServicios${index}`} nombre={servicios.especialidad} />
            })}
       
      </div>
    </> 
  );
};

export default Inicio;
