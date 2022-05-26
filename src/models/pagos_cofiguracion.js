
    const mongoose = require("mongoose");

    const Schema = mongoose.Schema;
    
    const schema = new Schema({
         concepto: { type: String, required: true},
         descripcion: { type: String, required: true},
         monto: { type: Number, required: true},
         periodicidad: { type: Number, required: falso},
         tieneFechaLimite:{type:Boolean,required:false, default:false},
         fechaLimite: { type:Date, required: false},
         fecha_registro: {type: Date, required: false},
         permisos: {type: String, required: false, default:"residente"}
    });
    
    module.exports = {
        schema,
        model: mongoose.model("Residente", schema),
    }