
    const mongoose = require("mongoose");

    const Schema = mongoose.Schema;
    
    const schema = new Schema({
         user: { type: String, required: true},
         password: { type: String, required: true}
         
    });
    
    module.exports = {
        schema,
        model: mongoose.model("Admin", schema),
    }