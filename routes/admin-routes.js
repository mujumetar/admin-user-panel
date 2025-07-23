const express = require("express");
const routes = express.Router();
const db = require("../config/db");
const multer = require("multer")

const adminCtl = require("../controller/adminCtl");
const adminTbl = require("../models/adminTbl");

let uploadAvatar = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/admin");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

let avatarImage = multer({ storage: uploadAvatar }).single("avatar");

routes.get("/", adminCtl.dashboard);
routes.get("/admin_form", adminCtl.adminform);
routes.get("/view_admin", adminCtl.view_admin);
routes.post("/insertAdmin", adminCtl.insertadmin);

module.exports = routes;
