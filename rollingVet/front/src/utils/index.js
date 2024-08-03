const urlPacientes = "http://localhost:3000/pacientes";
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