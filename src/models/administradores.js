const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    nombreCoto: { type: String, required: true },
    password: { type: String, required: true },
    logo: { type: String, required: true },
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
