import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Swal from 'sweetalert2';


const DropdownMascotasUsuario = ({ mascota, paciente }) => {

mascota.propietario = paciente.nombre

    const modalInfoMascota = () => {
        console.log(mascota);
        
        Swal.fire({
            title: mascota.nombre,
            html: `
                <p>Especie: ${mascota.especie}</p>
                <p>Raza: ${mascota.raza}</p>
                <p>Dueño: ${mascota.propietario}</p>
                `,
        });
    }
    

    return (

        <Dropdown.Item onClick={() => modalInfoMascota()}>{mascota.nombre}</Dropdown.Item>

    )
}
export default DropdownMascotasUsuario