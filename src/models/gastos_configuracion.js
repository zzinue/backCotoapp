
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
     concepto: { type: String, required: true},
     monto: { type: Number, required: true},
     descripcion: { type: String, required: true},
     imagen: { type: Buffer, required: false},
     seRepite:{type:Boolean,required:false,default:false},
     periodicidad: { type:String, required: false},

});

module.exports = {
    schema,
    model: mongoose.model("Gastos_configuracion", schema),
}