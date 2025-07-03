const mongoose = require('mongoose');

const joyasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        maxlength: 80 // Corregido: usa maxlength en lugar de length
    },
    descripcion: {
        type: String,
        required: true,
        maxlength: 250 // Corregido: usa maxlength en lugar de length
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
});

const joyasModel = mongoose.model('joyas', joyasSchema); 

module.exports = joyasModel;