const express = require("express");
const routes = express.Router();

const adminCtl = require("../controller/adminCtl");

routes.get("/",adminCtl.dashboard)

module.exports = routes;