const mongoose = require("mongoose")
const multer = require("multer")
const moment = require("moment")
const categorySchema = mongoose.Schema({

    categoryName:{
        type:String,
        required:true
    },
    categoryDescription:{
        type:String,
        required:true
    },
    categoryImage:{
        type:String,
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

const categoryStorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"uploads/category")
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname+"-"+Date.now())
    }
})

categorySchema.statics.uploadCategoryImage = multer({storage: categoryStorage}).single("categoryImage")

const category = mongoose.model("category",categorySchema)

module.exports = category