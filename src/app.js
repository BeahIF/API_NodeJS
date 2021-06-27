  
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// const router = express.Router();

// //Rotas
// const index = require('./routes/index');
// const terapeutaRoute = require('./routes/route_terapeuta');

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// app.use('/', index);
// app.use('/terapeuta', terapeutaRoute);

// module.exports = app;
const configExpress = require('./config/configExpress');
const config = require('config');
const instanciadb = require('./db');
// require('dotenv').config();
(async ()=>{
    try{
        await instanciadb.sync({force:true})
        app=configExpress()
        app.listen(config.get('api.port'),()=>{
            console.log("Servidor indo")
        });
    }catch(error){
        throw error;
    }
})();