const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const session = require("express-session")
var mainRoutes = require('./routes/index.js')
app.use(mainRoutes)
// console.log(session)
app.use(session({
    secret:"agendamentos",
    resave:true,
    saveUnintialized:true
}))
//.any());
const corsOptions = {
    origin:'*',
    optionsSuccessStatus:200
};
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/admin", { useNewUrlParser:true})
//   .then(conn =>         console.log("Database connection done.")  )
//   .catch(err => console.log("Deu ruim "+err)) 
require("./models/Terapeuta")
const Terapeuta = mongoose.model("terapeuta")
//////////////
const router = express.Router();

//Rotas
const index = require('./routes/index');
const terapeutaRoute = require('./routes/route_terapeuta');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/terapeuta', terapeutaRoute);

module.exports = app;





app.listen(1234, () => console.log("Server listening at 1234"))
