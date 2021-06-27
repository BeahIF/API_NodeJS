const { removeAllListeners } = require('nodemon');
const TabelaTerapeuta= require('./TabelaTerapeuta');
// const NaoEncontrado = require('../../errors/NaoEncontrado')
module.exports = {
  async listar(){
      try{
        return await TabelaTerapeuta.findAll({
            raw:true
        });
      }catch(error){
          throw error
      }
    }  ,
    async buscarPorPK(id){
      try{
        result = await TabelaTerapeuta.findByPk(id);
        if(!result){
        //   throw new NaoEncontrado('Agendamento')
        }
        return result
      }catch(error){
        throw error
      }
    },
    async adicionar(agendamento){
      console.log("o que ta bindo nesse ag")
      try{
        result = await TabelaTerapeuta.create(agendamento);
        return result
      }catch(error){
        throw error
      }
    },
    async atualizar(id,dados){
      try{
        result=await TabelaTerapeuta.update(dados,{
          where:{
            id:id
          }
        }

        );
      }catch(error){
        throw error
      }
    },
    async remover(id){
      try{
        result = await TabelaTerapeuta.destroy({
          where:{
            id:id
          }
        });
      }catch(error){
        throw error
      }
    }
};