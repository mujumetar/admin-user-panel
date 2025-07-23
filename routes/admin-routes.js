const express = require("express");
const routes = express.Router();

const adminCtl = require("../controller/adminCtl");
const adminTbl = require("../models/adminTbl")

routes.get("/", adminCtl.dashboard);
routes.get("/admin_form", adminCtl.adminform);
routes.get("/view_admin", adminCtl.view_admin);
routes.post("/insertAdmin", adminTbl.uploadimage, adminCtl.insertadmin)

module.exports = routes;
