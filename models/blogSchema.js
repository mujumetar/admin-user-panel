const mongoose = require("mongoose")

const multer = require("multer")
const moment = require("moment")

const blogSchema = mongoose.Schema({
    category:{
         type:String,
        required:true
    },
    blogName:{
           type:String,
        required:true
    },
    blogDesc:{
         type:String,
        required:true
    },
    blogImage:{
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
    },
})

const blogStorage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"uploads/blog")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"-"+Date.now())
    }
})

blogSchema.statics.uploadBlogImage = multer({storage: blogStorage}).single("blogImage")



const blog =  mongoose.model("blog",blogSchema)

module.exports = blog