const { Schema, model } = require("mongoose");
const SchemaPaciente = Schema({
    nombre: {
        type:String,
        required:[true,"Este campo es obligatorio"]
    },
    apellido: {
        type:String,
        required:[true, "Este campo es obligatorio"]
    },
    email: {
        type:String,
        required:[true, "Este campo es obligatorio"]
    },
    telefono: {
        type:String,
        required:[true, "Este campo es obligatorio"]
    },
    contraseña: {
        type:String,
        required:[true, "Este campo es obligatorio"]
    },
    admin: {
        type:Boolean,
        default:false
    },
    estado: {
        type:Boolean,
        default:true
    }
})
SchemaPaciente.methods.toJSON = function () {
    const {__v, _id, ...pet} = this.toObject()
    pet.uid = _id;
    return pet
}
module.exports = model("Paciente", SchemaPaciente);