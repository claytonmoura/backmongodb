const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const routes = require('./src/routes')

const app = express()

mongoose.connect('mongodb+srv://root:root@cluster0-backmongo.r40qa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Mongo Db conectado com sucesso")
    }
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor iniciado com Sucesso")
})