const TabelaSequelize = require('../models/TabelaTerapeuta');

TabelaSequelize.sync().then(()=>{
    console.log('Tabela criada')
}).catch((error)=>{
    console.log(error)
})