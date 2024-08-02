import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import wpLogo from '../assets/media/whatsappLogo.svg'
import ubicacionLogo from '../assets/media/ubicacionLogo.svg'
import calendarioLogo from '../assets/media/calendarioLogo.svg'
const Sucursales = (props) => {
    let sucursal = props.sucursal;
    return (
        <section className='m-4 bg-sucursal rounded-4'>
            <h2 className='my-4'>Sucursal {sucursal.id}</h2>
            <article id='sucursalContainer'>
                {sucursal.mapa}
                <div className='d-sm-flex align-items-center justify-content-around flex-sm-row'>

                    <div>
                        <img src={ubicacionLogo} alt="ubicacionLogo" />
                        <p>{sucursal.direccion}</p>
                    </div>

                    <div>
                        <img src={calendarioLogo} alt="calendarioLogo" />
                        <p className='text-center'>Lunes a Viernes: 9:00 a 20:00 hs <br /> Sabado: 9:00 a 14:00 hs</p>
                    </div>

                    <div>
                        <img src={wpLogo} alt="whatsappLogo" />
                        <p>{sucursal.telefono}</p>
                    </div>

                </div>
            </article>
        </section>
    )
}

export default Sucursales