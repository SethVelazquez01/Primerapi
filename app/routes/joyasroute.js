const express = require('express');
const router = express.Router();
const joyascontroller = require('../controllers/joyascontroller')

router.get('/',joyascontroller.buscarTodo);

module.exports = router;