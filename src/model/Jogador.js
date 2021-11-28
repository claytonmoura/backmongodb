const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    nome: {type: String},
    email: {type: String},
    jogo: {type: String},
    telefone: {type: String,unique: true},
    telSecundario: {type: String,unique: true}
},{timestamps:true})

module.exports = mongoose.model('jogador', DataSchema)