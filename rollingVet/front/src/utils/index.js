const urlPacientes = "http://localhost:3000/pacientes";
const urlMascotas = "http://localhost:3000/mascotas";
const urlTurnos = "http://localhost:3000/turnos";
import axios from 'axios';
import { compareSync } from 'bcryptjs-react';


// CRUD PACIENTES

export const validarPaciente = async (email) => {
  let data = await traerPacientes();
  let respuesta = data.find((paciente) => {
    if (paciente.email == email) {
      return paciente;
    }
  });
  return respuesta;
};
export const crearPaciente = async (obj) => {
    let paciente = await axios.post(urlPacientes, obj);
    return paciente
}

export const modificarPaciente = async (id, obj) => {
    try {
        let paciente = await axios.put(`${urlPacientes}/${id}`, obj);
        return paciente
    } catch (error) {
        console.error(error);
    }
}

export const traerPacientes = async () => {
  try {
    let pacientes = await axios.get(`${urlPacientes}/`);
    console.log(pacientes);
    let { data } = pacientes;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const ingresoPaciente = async (obj) => {
    let pacientes = await traerPacientes();
    let paciente = pacientes.find(paciente => {
        if (paciente.email == obj.email && paciente.contraseña == obj.contraseña) {
            return paciente
        }
    });
    console.log(paciente);
    if (paciente?.email && /* compareSync(obj.contraseña, paciente.contraseña) */ paciente?.contraseña ) {
        console.log(paciente);
        return paciente
    }
}

export const capturarUnPaciente = async (id) => {
    try {
        let paciente = await axios.get(`${urlPacientes}/${id}`);
        return paciente;
    } catch (error) {
        console.error(error);
    }
}

// CRUD TURNOS





export const validarTurno = async (hora, fecha, sucursal) => {
  let data = await traerTurnos();
  let respuesta = data.find((turno) => {
    if (
      (turno.hora && turno.fecha && turno.sucursal !== hora, fecha, sucursal)
    ) {
      return turno;
    } else {
    }
  });
  return respuesta;
};

export const traerTurnos = async () => {
  try {
    let turnos = await axios.get(`${urlTurnos}/`);

    let { data } = turnos;

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const traerUnTurno = async (id) => {
    try {
        let turno = await axios.get(`${urlTurnos}/${id}`);
        return turno;
    } catch (error) {
        console.error(error);
    }
}

export const crearTurno = async (obj) => {
    try {
      let turno = await axios.post(urlTurnos, obj);
      return turno;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const actualizarTurno = async (id, obj) => {
    console.log(obj);
    try {
      let turno = await axios.put(`${urlTurnos}/${id}`, obj);
      return turno;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const eliminarTurno = async (id) => {
    try {
      let turno = await axios.delete(`${urlTurnos}/${id}`);
      return turno;
    } catch (error) {
      console.log(error);
    }
  };


// Mascotas

export const crearMascota = async (obj) => {
    let mascota = await axios.post(urlMascotas, obj);
    return mascota
}
export const eliminarMascota = async (id) => {
    try {
        let mascota = await axios.delete(`${urlMascotas}/${id}`)
        return mascota
    } catch (error) {
        console.error(error);
    }
}
export const traerMascotas = async () => {
    try {
        let mascotas = await axios.get(`${urlMascotas}/`);
        let {data} = mascotas;
        return data
    } catch (error) {
        console.error(error)
    }
}
export const traerMascotasUsuario = async (IDmascotasUsuario) => {
    try {
        const mascotas = await traerMascotas();
        const arrayMascotasUsuario = mascotas.filter((mascota) => {
            if (IDmascotasUsuario.includes(mascota.id)) {
                return mascota
            }
        })
        return arrayMascotasUsuario
    } catch (error) {
        console.log(error);
    }
}

