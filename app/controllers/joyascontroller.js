const joyasModel = require('../models/joyasModel');

// GET todas las joyas
async function buscarTodo(req, res) {
    try {
        const joyas = await joyasModel.find({});
        if (joyas.length === 0) {
            return res.status(204).send({ mensaje: "No hay joyas registradas" });
        }
        res.status(200).json(joyas);
    } catch (e) {
        res.status(500).send({ mensaje: `Error al consultar: ${e.message}` });
    }
}

// POST agregar nueva joya
async function agregarJoya(req, res) {
    try {
        // Validación manual para mejor feedback
        if (!req.body.nombre || !req.body.descripcion || !req.body.precio || !req.body.peso) {
            return res.status(400).json({
                error: "Faltan campos obligatorios: nombre, descripcion, precio, peso"
            });
        }

        const nuevaJoya = new joyasModel({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            peso: req.body.peso
        });

        const joyaGuardada = await nuevaJoya.save();
        res.status(201).json({
            mensaje: "Joya creada correctamente",
            joya: joyaGuardada
        });
    } catch (e) {
        res.status(400).json({ error: "Error al guardar: " + e.message });
    }
}

// GET joya por parámetros (ej: /joyas/nombre/Anillo)
async function buscarJoya(req, res) {
    try {
        const key = req.params.key;
        const value = req.params.value;
        
        const consulta = { [key]: value };
        const joyas = await joyasModel.find(consulta);
        
        if (joyas.length === 0) {
            return res.status(404).json({ mensaje: "No se encontraron joyas" });
        }
        
        res.status(200).json(joyas);
    } catch (e) {
        res.status(500).json({ error: "Error en la búsqueda: " + e.message });
    }
}



function mostrarJoya(req, res) {
    if (req.locals?.error) {
        return res.status(500).json({ error: req.locals.error.message });
    }
    if (!req.locals?.joyas || req.locals.joyas.length === 0) {
        return res.status(404).json({ mensaje: "No se encontraron joyas" }); 
    }
    res.status(200).json({ joyas: req.locals.joyas }); 
}


async function eliminarjoya(req, res) {
    try {
        const nombre = req.params.nombre;
        const resultado = await joyasModel.deleteOne({ nombre: nombre });
        
        if (resultado.deletedCount === 0) {
            return res.status(404).send({ mensaje: "No se encontró la joya con ese nombre" });
        }
        
        res.status(200).send({ mensaje: "Joya eliminada exitosamente" });
    } catch (e) {
        res.status(500).send({ mensaje: "Error al eliminar: " + e.message });
    }
}

async function actualizarjoya(req, res) {
    try {
        const nombre = req.params.nombre;
        const datosActualizados = req.body;
        
        const joyaActualizada = await joyasModel.findOneAndUpdate(
            { nombre: nombre },
            datosActualizados,
            { new: true, runValidators: true }
        );
        
        if (!joyaActualizada) {
            return res.status(404).send({ mensaje: "Joya no encontrada" });
        }
        
        res.status(200).send({
            mensaje: "Joya actualizada correctamente",
            joya: joyaActualizada
        });
    } catch (e) {
        res.status(500).send({ mensaje: "Error al actualizar: " + e.message });
    }
}


module.exports ={
    buscarTodo,
    agregarJoya,
    buscarJoya,
    mostrarJoya,
    eliminarjoya,
    actualizarjoya
}