const Sequelize = require('sequelize');
const instanciadb = require('../../db/index')
const columns ={
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    experiencia_profissional:{
        type:Sequelize.STRING,
        allowNull:false
    },
    formacao:{
        type:Sequelize.STRING,
        allowNull:false    },
    registro:{
        type:Sequelize.STRING,
        allowNull:false
    }
};
const sequelizeOptions = {
    freezeTableName:true,
    tableName:'terapeutas',
    timestamps:true,
    createdAt:'data_criacao',
    updateAt:'data_atualizacao'
};
module.exports =instanciadb.define("terapeutas",columns, sequelizeOptions)