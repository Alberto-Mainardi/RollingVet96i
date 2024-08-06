import React from 'react'
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/error404.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <main className='d-flex justify-content-center align-items-center bg-error404 w-100'>
        <section className='p-4 bg-color1-50'>
            <h1 className='font-title error404-titulo'>Error 404</h1>
            <p className='fs-4'>Lo sentimos. Esta pagina no existe.</p>
            <Button variant='dark' as={Link} to="/">Volver</Button>
        </section>
    </main>
  )
}

export default Error404