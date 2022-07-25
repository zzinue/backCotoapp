const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    casa: { type: Number, required: true },
    telefono: { type: Number, required: true },
    nombreCoto: { type: String, required: true },

});

schema.methods.toJSON = function () {
    let administrador = this.toObject();
    delete administrador.password;
    return administrador;
}
module.exports = {
    schema,
    model: mongoose.model("Administrador", schema),
}
