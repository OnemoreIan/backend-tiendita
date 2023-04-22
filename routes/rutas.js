const express = require('express');
//importacion de los metodos o funciones
const metodos = require('../controllers/metodos');
//declaracion de enrutado
const router = express.Router();

// rutas
router.get('/general',metodos.general);
router.get('/articulo',metodos.articulo);
router.post('/articulo',metodos.PostArticulo);
router.patch('/articulo',metodos.PatchArticulo);
router.delete('/articulo',metodos.DelArticulo);
router.put('/articulo',metodos.PutArticulo);

module.exports = router;