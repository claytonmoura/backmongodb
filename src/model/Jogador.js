const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome: String,
    email: String,
    jogo: String,
    telefone: {
        type: String,
        unique: true
     },
    telSecundario: {
        type: String,
        unique: true
    }
})

const jogador = mongoose.model('Jogador', DataSchema) // falando pro mongoose criar um model usuario atraves dos campos do DataSchema
module.exports = jogador; 