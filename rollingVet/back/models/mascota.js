const { Schema, model } = require("mongoose");
const SchemaMascota = Schema({
    nombre: {
        type:String,
        required:[true,"Este campo es obligatorio"]
    },
    especie: {
        type:String,
        required:[true, "Este campo es obligatorio"]
    },
    raza: {
        type:String,
        required:[true, "Este campo es obligatorio"]
    },
    dueñoID: {
        type:Number,
        required:[true, "Este campo es obligatorio"]
    },
    state: {
        type:Boolean,
        default:true
    }
})
SchemaMascota.methods.toJSON = function () {
    const {__v, _id, ...mascota} = this.toObject()
    mascota.uid = _id;
    return mascota
}
module.exports = model("Mascota", SchemaMascota);