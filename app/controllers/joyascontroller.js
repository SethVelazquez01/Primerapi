const joyasModel = require('../models/joyasModel')

function buscarTodo(req,res){
    joyasModel.find({}) //Con esta linea va y busca todo en una coleccion
    .then(joyas => { //Se almacena en la variable llamada joyas
        if(joyas.lenght){
            return res.status(200).send({joyas})
        }
        return res.status(204).send({mensaje:"no hay nada que mostrar"})
    })
    .catch(e =>{return res.status(404).send({mensaje: `error al consultar la informacion ${e}`})})
}

module.exports ={
    buscarTodo
}