import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Swal from 'sweetalert2';


const DropdownMascotasUsuario = ({ mascota, paciente, setPaciente, eliminarMascota }) => {


    mascota.propietario = paciente.nombre

    const modalInfoMascota = () => {
        

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

                eliminarMascota(mascota.uid);

                const nuevoUsuario = {
                    ...paciente,
                    mascotasIDs: paciente.mascotasIDs.filter(mascotaUsuario => mascotaUsuario.uid != mascota.uid)
                  }
                  console.log(nuevoUsuario.mascotasIDs);
                  setPaciente(nuevoUsuario);
                  localStorage.setItem("user", JSON.stringify(nuevoUsuario));

                Swal.fire("Mascota eliminada", "", "error");
            }
        });
}


return (

    <Dropdown.Item onClick={() => modalInfoMascota()}>{mascota.nombre}</Dropdown.Item>

)
}
export default DropdownMascotasUsuario