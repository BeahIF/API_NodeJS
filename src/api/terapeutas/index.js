const router= require('express').Router();
const servicoTerapeuta = require('../../services/terapeutas') 

router.get('/terapeutas', servicoTerapeuta.carregarTodosTerapeutas
);
// router.get('/terapeutas', (req, resp) => {
//     console.log("alguma coisa")
//     resp.send('OK');
// });
 router.post('/terapeutas', servicoTerapeuta.criarTerapeuta
 );


module.exports =router