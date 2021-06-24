const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const contactShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: "users"
         },
    type:{
        type:String,
        default:'personal'
    },
    date:{
        type:Date,
        default:Date.new
    },
})

const ContactUser=mongoose.model('contact',contactShema);
module.exports=ContactUser;