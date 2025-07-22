const express = require("express");
const routes = express.Router();

const adminCtl = require("../controller/adminCtl");

routes.get("/", adminCtl.dashboard);
routes.get("/admin_form", adminCtl.adminform);
routes.get("/view_admin", adminCtl.view_admin);

module.exports = routes;
