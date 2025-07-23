const mongoose = require("mongoose")
const multer = require("multer")

module.exports.dashboard = (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    console.log("err");
  }
};

module.exports.adminform = (req, res) => {
  try {
    res.render("admin_form");
  } catch (err) {
    console.log(err);
  }
};

module.exports.view_admin = (req, res) => {
  try {
    res.render("view_admin");
  } catch (err) {
    console.log(err);
  }
};

module.exports.insertadmin = async (req, res) => {
  console.log("hii")
  console.log(req.body);
  console.log(req.file);

  // if (req.file) {
  //   req.body.avatar = req.file.path;
  // }
  // try {
  //   let data = await adminTbl.create(req.body);
  //   return res.redirect("/admin_form");
  // } catch (error) {
  //   console.log(error);
  //   return res.redirect("404");
  // }
};