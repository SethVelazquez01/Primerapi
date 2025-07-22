const mongoose = require('mongoose');

const joyaEschema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        maxlength: 80 
    },
    descripcion: {
        type: String,
        required: true,
        maxlength: 250 
    },
    precio: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 10
    }
}, { 
    versionKey: false, 
    strict: true
}); 

const Joya = mongoose.model('Joya', joyaEschema);

module.exports = Joya;