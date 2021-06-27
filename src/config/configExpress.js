// const express=require('express');

// const routeTerapeuta = require('../api/terapeutas/index');
// // const  FormatosValidos = require('../shared/Serializer').FormatosValidos;
// // const SerializarErro = require('../shared/Serializer').SerializarErro;
// // const passport = require('./autenticacao')
// module.exports = () =>{
//     const app = express();
//      app.use((req,res,
//         // next
//         )=>{
//     //     let formatoSolicitado =req.header('Accept');
//     //     if(formatoSolicitado === '*/*'){
//     //         formatoSolicitado = 'application/json';

//     //     }
//     //     if(FormatosValidos.indexOf(formatoSolicitado)=== -1){
//     //         res.status(406);
//     //         res.end();
//     //         return
//     //     }
//     //     res.setHeader('Content-Type',formatoSolicitado);
//     //     next()
//      })

//     app.use(express.json());
//     app.use('/api', routeTerapeuta);
 
 
//     // app.use((error, req,res,next)=>{
//     //     let status = 500;
//     //     serializarErro =new SerializarErro(
//     //         res.getHeader('Content-Type')
//     //     )
//     //     if(error instanceof NaoEncontrado){
//     //         status = 404;
//     //     };
//     //     if(error instanceof CampoInvalido || error instanceof CampoQtdMaxima || error instanceof CampoQtdMinima){
//     //         status = 400;
//     //     }
//     //     res.status(status).send(
//     //         serializarErro.transformar({
//     //             id:error.idError,
//     //             mensagem:error.message
//     //         })
//     //     )
//     // })
//     return app
// }
const express = require('express');
const routesTerapeutas = require('../api/terapeutas');

module.exports = () => {
    const app = express();

    app.use(express.json());
    app.use('/api', routesTerapeutas);
//     app.use(app.router);
// routes.initialize(app);

    return app
} 