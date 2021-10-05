const express = require('express');
const JogadorController = require('./controller/JogadorController');

const routes = express.Router();

routes.get('/', function (req,res){
    res.json({message: "Bem vindo ao Back End mongo db"})
})

routes.get('/jogador', JogadorController.index)
routes.get('/jogador/:_id', JogadorController.detail)
routes.post('/jogador', JogadorController.store)
routes.delete('/jogador/:_id', JogadorController.delete)
routes.put('/jogador', JogadorController.update)

module.exports = routes;