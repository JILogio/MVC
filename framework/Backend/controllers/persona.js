'use strict'

var validator = require('validator');
const Paciente = require('../models/Paciente');

var controller = {

    datosPaciente: (req,res) => {

        return res.status(200).send({
            cedula: "0604857615",
            nombre: "Johann Ordoñez",
            email: "jismael@gmail.com",
            edad: 21
        });
    },

    save: async (req, res) => {
        // Recoger parametros
        var params = req.body;
    
        // Validar datos
        try {
            var validate_cedula = !validator.isEmpty(params.cedula);
            var validate_nombre = !validator.isEmpty(params.nombre);
            var validate_email = !validator.isEmpty(params.email);
            var validate_edad = !validator.isEmpty(params.edad);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos'
            });
        }
    
        if (validate_cedula && validate_nombre && validate_email && validate_edad) {
            try {
                var data = new Paciente();
                data.cedula = params.cedula;
                data.nombre = params.nombre;
                data.email = params.email;
                data.edad = params.edad;
    
                const PacienteStored = await data.save();
    
                if (!PacienteStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'Datos no guardados'
                    });
                }
    
                return res.status(200).send({
                    status: 'success',
                    data: PacienteStored
                });
            } catch (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al guardar datos'
                });
            }
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Datos no válidos'
            });
        }
    },

    getPersonas: async (req, res) => {
        try {
          const personas = await Paciente.find({}).exec();
          if (!personas) {
            return res.status(200).json({
              status: 'error',
              message: 'No hay datos'
            });
          }
      
          return res.status(200).send({
            status: 'success',
            personas
          });
        } catch (err) {
          return res.status(200).send({
            status: 'error',
            message: 'Error al devolver datos'
          });
        }
    },

    delete: async (req, res) => {
        try {
            // Recoger el id de la url
            var articleId = req.params.id;
    
            // Find and delete
            const articleRemoved = await Article.findOneAndDelete({ _id: articleId }).exec();
    
            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el artículo, posiblemente no existe !!!'
                });
            }
    
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al borrar !!!'
            });
        }
    },

    search: async (req, res) => {
        try {
            var searchString = req.params.search;
    
            const data = await Paciente.find({"$or": [
                {"nombre": searchString},
                {"cedula": searchString}
            ]}).exec();
    
            if (!data || data.length <= 0) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay datos que coincidan con la búsqueda'
                });
            }
    
            return res.status(200).send({
                status: 'success',
                data
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error en la petición'
            });
        }
    }
    
};

module.exports = controller;