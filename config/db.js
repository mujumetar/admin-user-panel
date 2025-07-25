const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/blogProject")

const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err)
        return false
    }

    console.log("db id connected")
})


module.exports = db