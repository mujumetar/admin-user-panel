const express = require("express");
const path = require("path");
const app = express();
const port = 2000;
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use("views",path.join(__dirname,"views"))
const db = require("./config/db");
app.use("/", require("./routes/index"));
app.use(express.static(path.join(__dirname, "/public")));

app.listen(port, (err) => {
  if (err) {
    console.log("server is not connected...!");
    return false;
  }
  console.log("connected to the port " + port);
});
