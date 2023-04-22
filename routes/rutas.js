const express = require('express');
//importacion de los metodos o funciones
const metodos = require('../controllers/metodos');
//declaracion de enrutado
const router = express.Router();

// rutas
router.get('/general',metodos.general);
// router.get('/exito',Metodos.general);
// router.post('/datos-curso', Metodos.datosCurso);
// router.get('/test-de-controllador', Metodos.test);
// router.post('/test',Metodos.recepcion);

//rutas para articulos
//router.post('/save',Metodos.save);

module.exports = router;