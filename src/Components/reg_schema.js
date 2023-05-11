const mongoose = require('mongoose');

const regschema = new mongoose.Schema({
    Companyname:{
        type:String,
        required:true,
    },
    companyownerName:{
        type:String,
        required:true,
    },  
    Companycontectno :{
        type:Number,
        required:true
    },
    email:{
    type:Date,
    required:false
    },
    CompanyAddress:{
    type:String,
    required:true
    },
    Adtype:{
        type:String,
        required:true
    },
    productName:{
    type:String,
    required:true
    },
    Ad_duration:{
    type:String,
    required:true
     },
    Timeline:{
    type:Number,
    required:true
        },
        

})

const Register = new mongoose.model('Registation',regschema);

module.exports = Registration;