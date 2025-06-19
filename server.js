const express = require('express');
const app = express();
const config = require('./app/config/configuracion');
const joyasRoutes = require('./app/routes/joyasroute');
const conexion = require('./app/config/conexion')

conexion.connect()

app.use('/Joyas', joyasRoutes);

app.listen(config.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${config.PORT}`);
});