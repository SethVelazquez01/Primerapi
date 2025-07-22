const express = require('express');
const app = express();

const joyasRoutes = require('./routes/joyasroute');

// Middlewares necesarios para parsear JSON y form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/joyas', joyasRoutes);

module.exports = app;

