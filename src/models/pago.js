const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
    monto: { type: Number, required: true },
    fecha_pago: { type: Date, required: true },
    comprobante: { type: String, required: true },
    aprobado: { type: Boolean, required: true, default: false },
    casa: { type: Number, required: true },
    pago_id : {type:String, required: false}
});

module.exports = {
    schema,
    model: mongoose.model("Pago", schema),
}