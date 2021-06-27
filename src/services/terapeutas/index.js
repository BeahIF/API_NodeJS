const Terapeuta = require('./Terapeuta')
const SequelizeTerapeuta = require('../../models/terapeutas/SequelizeTerapeuta');
// const SerializarTerapeuta = require('../../shared/Serializer').SerializarAgendamento;
module.exports = {
    carregarTodosTerapeutas:async(req,res)=>{
        try{
            const results = await SequelizeTerapeuta.listar();
            // res.status(201).send(JSON.stringify(results));
            // const serializador = new SerializarTerapeuta(
                // res.getHeader('Content-Type'),
                // ['status']
            // );
            res.status(200)
        }catch(error){
            res.status(401).send(JSON.stringify(error))
            // next(error)
        }
    },
    carregarTerapeuta: async(req,res,next)=>{
        try{
            const id = req.params.id;
            const terapeuta = new Terapeuta({id:id});
            await terapeuta.buscar();
            const serializador = new SerializarAgendamento(
                res.getHeader('Content-Type')
            )
            // res.status(201).send(JSON.stringify(terapeuta))
            res.status(201).send(serializador.transformar(terapeuta))
        }catch(error){
            // res.status(401).send(JSON.stringify(error))
            next(error)
        }
    },
    criarTerapeuta: async(req,res
        // ,next
        )=>{
        try{
            const reqTerapeuta = req.body;
            const terapeuta = new Terapeuta(reqTerapeuta);
            await terapeuta.criar()
            res.status(201).send(JSON.stringify(terapeuta))
            // res.status(201).send(serializador.transformar(terapeuta))
        }catch(error){
            res.send(JSON.stringify(error))
            // res.status(404).send({error:error.message})
            // next(error)
        }
    },
    deletarAgendamento:async(req,res)=>{
        try{
            const id = req.params.id;
            const terapeuta = new Terapeuta({id:id});
            await terapeuta.remover()
            // res.status(201).send(JSON.stringify({message:`Terapeuta: ${id} removido com sucesso!`}))
            const serializador = new SerializarAgendamento(
                res.getHeader('Content-Type')
            );
            res.status(200).send(serializador.transformar({message:`Terapeuta ${id} removido com sucesso` }))
        }catch(error){
                // res.status(404).send(JSON.stringify({error:error.message}))
            next(error)
        }
    },
    alterarAgendamento:async(req,res)=>{
        try{
            const id = req.params.id;
            const dadosBody=req.body;
            const dados = Object.assign({},dadosBody,{id:id})
            const terapeuta = new Terapeuta(dados)
            await terapeuta.atualizar()
            const serializador = new SerializarAgendamento(
                res.getHeader('Content-Type')
            );
            res.status(201).send(serializador.transformar(terapeuta));
        }catch(error){
            // res.status(400).send()
            next(error)
        }
    }

}