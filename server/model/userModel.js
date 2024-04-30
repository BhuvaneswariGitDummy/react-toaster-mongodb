const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requied:true
    },
    password:{
        type:String,
        requied:true
    }
})

module.exports = mongoose.model("User",userSchema)