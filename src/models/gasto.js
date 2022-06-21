const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
    concepto: { type: String, required: true },
    monto: { type: Number, required: true },
    fecha_gasto: { type: Date, required: true },
    comprobante: { type: String, required: true },
    descripcion: { type: String, required: false },
    imagen_mejora: { type: Buffer, required: false },
});

module.exports = {
    schema,
    model: mongoose.model("Gastos", schema),
}