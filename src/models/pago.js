
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
     monto: { type: Number, required: true},
     fecha_pago: { type: Date, required: true},
     comprobante: { type: Buffer, required: true},
     aprobado: { type: Boolean, required: true, default: false},
     residente:{type:String,required:true},
    
});

module.exports = {
    schema,
    model: mongoose.model("Pago", schema),
}