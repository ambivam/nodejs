const express = require('express')
const app = express()
const Joi = require('@hapi/joi')

const route = require('./expressRoutesApp')

app.use(express.json())

app.use('/abc',route)

const port = '8888'

app.listen(port,()=>{
    console.log("Listening on port : "+port);
})