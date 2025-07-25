const express = require("express")
const path = require("path")
const port = 4000;
 const db = require("./config/db")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use("/",express.static(path.join('public')))
app.use("/uploads",express.static(path.join(__dirname,"/uploads")))
app.use("/", require("./routes/index"))


app.listen(port,(err)=>{

    err? console.log(err) : console.log(`server is connected at port : ${port}`)
})