// this is the mongoDB schemem in mongoose

const mongoose = require('mongoose');

var schema = new mongoose.schema({
    name:{
        type:string,
        require: true
    },
    email:{
        type: string,
        require: true,
        unique: true,
    },
    
})

const userdb = mongoose.model('userdb', schema)

module.exports = userdb;