const express = require("express");
const routes = express.Router();

const userCtl = require("../controller/userCtl");
routes.get("/", userCtl.home);


module.exports = routes;
