const express = require('express')
const app = express();
const router =require('./routes/joyasroute')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/Joyas',router)


module.exports=app

