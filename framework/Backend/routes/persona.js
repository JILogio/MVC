'use strict'

var express = require('express');
var PersonaController = require('../controllers/persona');
const { route } = require('../app');

var router = express.Router();

// rutas model MVC
router.post('/save',PersonaController.save);
router.get('/personas',PersonaController.getPersonas);
router.get('/search/:search',PersonaController.search);
router.delete('/delete/:id',PersonaController.delete);

module.exports = router;