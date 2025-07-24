const mongoose = require('mongoose');
const multer = require("multer")
const moment = require("moment")

const path = require("path")
// const imagePath = require("/uploads")

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    qualification:{
        type:Array,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true,
        required:true
    },
    createdAt:{
        type:String,
        default:moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    updatedAt:{
        type:String,
        default:moment().format('MMMM Do YYYY, h:mm:ss a')
     

    }
})


const adminStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname+"-"+Date.now())
    }
})


adminSchema.statics.uploadAdminImage = multer({storage:adminStorage}).single("photo")

const admin = mongoose.model("admin",adminSchema)


module.exports = admin