const express = require("express");
const routes = express.Router();
const adminCtl = require("../controller/adminCtl");
const admin = require("../models/adminTbl");
const db = require("../config/db");
const multer = require("multer");
const passport = require("passport");
const session = require("express-session");

routes.get("/", adminCtl.authLogin);
routes.get("/dashboard", passport.isAuth, adminCtl.dashboard);
routes.post(
  "/loginAdmin",
  passport.authenticate("local", { failureRedirect: "/admin" }),
  adminCtl.loginAdmin
);
routes.get("/admin_form", passport.isAuth, adminCtl.adminform);
routes.get("/view_admin", passport.isAuth, adminCtl.viewAdmin);
routes.post(
  "/insertAdmin",
  passport.isAuth,
  admin.uploadAdminImage,
  adminCtl.insertadmin
);
routes.get("/delete/:id", passport.isAuth, adminCtl.deleteAdmin);
routes.get("/update/:id", passport.isAuth, adminCtl.updateAdmin);
routes.get("/adminProfile", passport.isAuth, adminCtl.adminProfile);
routes.get("/searchAdminData", adminCtl.searchAdminData);
routes.post(
  "/updataAdminData",
  admin.uploadAdminImage,
  adminCtl.updataAdminData
);
routes.post("/changePass", adminCtl.changePass);
routes.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/admin/");
  });
});

routes.get("/changePassword", passport.isAuth, adminCtl.changePassword);
routes.get("/forgotPassEmail", adminCtl.forgotPassEmail);
routes.post("/forgotPassEmail", adminCtl.forgotPassEmails);
routes.use("/blog", passport.isAuth, require("../routes/blog"));
module.exports = routes;
