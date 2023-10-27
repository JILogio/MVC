'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PacienteSchema = Schema({
    cedula: String,
    nombre: String,
    email: String,
    edad: Number
},{ collection: 'Paciente'});

module.exports = mongoose.model('Paciente',PacienteSchema);
