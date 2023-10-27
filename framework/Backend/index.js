'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Laboratorio2')
        .then(() => {
            console.log('Conectado a la base de datos');

            //Servidor
            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
            })
    });