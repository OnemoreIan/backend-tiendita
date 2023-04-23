const express = require('express');
//importacion de las funciones para las rutas
const metodos = require('../controllers/metodos');
//declaracion de enrutado
const router = express.Router();

// rutas
router.get('/general',metodos.general);
router.post('/articuloe',metodos.articulo);
router.post('/articulo',metodos.PostArticulo);
router.patch('/articulo',metodos.PatchArticulo);
router.delete('/articulo',metodos.DelArticulo);
router.put('/articulo',metodos.PutArticulo);

router.get('/comment',metodos.GetComentarios);
router.post('/comment',metodos.PostComentarios);

module.exports = router;