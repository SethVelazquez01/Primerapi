const app = require('./app/app.js'); // Importa la instancia que ya tiene middlewares
const config = require('./app/config/configuracion.js');
const conexion = require('./app/config/conexion.js');

conexion.connect();

app.listen(config.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${config.PORT}`);
});