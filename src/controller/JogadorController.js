const Jogador = require('../model/Jogador');

module.exports = {
    async index(req,res){
        const jogadores = await Jogador.find(); //select * from jogador
        res.json(jogadores)
    },

    async detail(req, res){
        const {_id} = req.params
        const jogadores = await Jogador.findOne({_id})
        .then(jogadores => {
            res.status(200).json(jogadores)
        }).catch(err => {
             res.status(400).send({
                errors: [{message: "Id não encontrado!"}]
            })
        })

    },

    async delete(req, res){
            const {_id} = req.params
            await Jogador.findByIdAndDelete({_id}).

            then(jogador => {

                res.send({ message: `Jogador ${jogador.nome} removido com sucesso!!`})

            }).catch(err => {

                return res.status(500).send({

                    errors: [{message: `Problema ao remover o jogador com o id ${_id}`}]

                })

            })
    },

    async store(req, res){
        try{
            const { nome, email, jogo, telefone, telSecundario } = req.body;

            let dataCreate = {}
    
            dataCreate = {
                nome, email, jogo, telefone, telSecundario
            }
    
            const jogadores = await Jogador.create(dataCreate) // Get
            res.json(jogadores)
        }catch(err){
            res.status(500).send({
                errors: [{ message: 'Problema ao salvar'}]
            })
        }
       
    },

    async update(req, res){
        try{
            const { _id, nome, email, jogo, telefone, telSecundario } = req.body;

            let dataCreate = {}
    
            dataCreate = {
                nome, email, jogo, telefone, telSecundario
            }
    
            const jogadores = await Jogador.findByIdAndUpdate({_id}, dataCreate, {new: true}) 
            res.status(200).json(jogadores)
        }catch(err){
            res.status(500).send({
                errors: [{ message: 'Problema ao fazer a alteração ' + err.message}]
            })
        }
    }
}