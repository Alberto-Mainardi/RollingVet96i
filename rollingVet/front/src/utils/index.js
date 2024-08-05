const urlPacientes = "http://localhost:3000/pacientes";
const urlMascotas = "http://localhost:3000/mascotas";
import axios from 'axios';
import { compareSync } from 'bcryptjs-react';

export const validarPaciente = async (email) => {
    let data = await traerPacientes()
    let respuesta = data.find((paciente) => {
        if (paciente.email == email) {
            return paciente;
        } 
    })
    return respuesta
}
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
        let {data} = pacientes;
        console.log(data);
        return data
    } catch (error) {
        console.error(error)
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



// Mascotas

export const crearMascota = async (obj) => {
    let mascota = await axios.post(urlMascotas, obj);
    return mascota
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