const express = require('express')
const cookieParser = require('cookieParser')
const cors = require('cors')
const path = require('path')

const routes = require('./src/routes')

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3003, function(){
    console.log("Servidor iniciou com Sucesso")
})