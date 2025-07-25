const express = require("express");
const routes = express.Router();
const adminCtl = require("../controller/adminCtl");
const admin = require("../models/adminTbl");
const db = require("../config/db");
const multer = require("multer");



routes.get("/", adminCtl.dashboard);
routes.get("/admin_form", adminCtl.adminform);
routes.get("/view_admin", adminCtl.viewAdmin);
routes.post("/insertAdmin", admin.uploadAdminImage, adminCtl.insertadmin);
routes.get("/delete/:id", adminCtl.deleteAdmin)
// routes.get("/update/:id", adminCtl.updateAdmin)
routes.get("/searchAdminData", adminCtl.searchAdminData)
module.exports = routes;
