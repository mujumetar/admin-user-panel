const express = require("express");
const routes = express.Router();

const adminCtl = require("../controller/adminCtl");

routes.get("/",adminCtl.dashboard)
routes.get("/admin_form",adminCtl.adminform)

module.exports = routes;