const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Terapeuta =  new Schema({
    
   
    nome:{
        type:String,
        required:true
    },
      
    senha:{
        type:String,
        required:true
    },
    

})

mongoose.model("terapeuta", Terapeuta)