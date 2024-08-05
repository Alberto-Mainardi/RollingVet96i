import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Swal from 'sweetalert2';


const DropdownMascotasUsuario = ({ mascota, paciente, eliminarMascota }) => {

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
            showDenyButton: true,
            confirmButtonText: "Ok",
            denyButtonText: `Eliminar`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {

                console.log(mascota);
                eliminarMascota(mascota.id);

                Swal.fire("Mascota eliminada", "", "error");
            }
        });
}


return (

    <Dropdown.Item onClick={() => modalInfoMascota()}>{mascota.nombre}</Dropdown.Item>

)
}
export default DropdownMascotasUsuario