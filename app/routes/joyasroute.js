const express = require('express');
const router = express.Router();
const joyasController = require('../controllers/joyascontroller.js');

router.get('/', joyasController.buscarTodo);
router.post('/', joyasController.agregarJoya);
router.get('/:key/:value', joyasController.buscarJoya);
router.delete('/:nombre', joyasController.eliminarjoya);
router.put('/:nombre', joyasController.actualizarjoya);

module.exports = router;
