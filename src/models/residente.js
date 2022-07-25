const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
     nombre: { type: String, required: true},
     email: { type: String, required: true, unique: true},
     casa: { type: Number, unique: true, required: true},
     telefono: { type: String, required: true},
     password:{type:String,required:true},
     user: { type:String, required: true},
	 fecha_registro: {type: Date, required: false},
	 permisos: {type: String, required: false, default:"residente"}
});
schema.methods.toJSON = function (){
    let residente = this.toObject();
    
    delete residente.password;
    return residente;
}
module.exports = {
    schema,
    model: mongoose.model("Residente", schema),
}

