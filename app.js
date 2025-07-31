const express = require("express");
const path = require("path");
const app = express();
const port = 2000;
const passport = require("passport");
const localStrategy = require("./config/passLocal");
const session = require("express-session");
app.use(express.urlencoded());
app.set("view engine", "ejs");
// app.use("views", path.join(__dirname, "views"))
const db = require("./config/db");
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/", require("./routes/index"));
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "views"));



app.use(session({
    name:"Admin",
    secret:"Admin",
    resave:false,
    saveUninitialized:false,
    proxy:true,
    cookie:{
        maxAge:1000*60*60*24
    }

}))


app.use(passport.initialize())
app.use(passport.session())
app.use(passport.userAuth)
app.use("/", require("./routes/index"))

app.listen(port, (err) => {
  if (err) {
    console.log("server is not connected...!");
    return false;
  }
  console.log("connected to the port " + port);
});
