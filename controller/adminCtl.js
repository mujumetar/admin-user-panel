const mongoose = require("mongoose");
const multer = require("multer");
const admin = require("../models/adminTbl");

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
  let {
    name,
    fname,
    lname,
    email,
    password,
    message,
    city,
    gender,
    qualification,
  } = req.body;
  let photo = req.file.path;

  name = fname + " " + lname;

  try {
    const adminData = await admin.create({
      name,
      email,
      password,
      message,
      city,
      gender,
      qualification,
      photo,
    });

    console.log("data added successfully");

    return res.redirect("/admin/view_admin");
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports.viewAdmin = async (req, res) => {
  try {
    console.log(req.query);
    return res.render("view_admin", {
      adminData,
      totalPage,
      search,
      page,
    });

    // // console.log(searchAdmin)
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports.searchAdminData = async (req, res) => {
  try {
    console.log("searchadmin-execute");

    return res.render("view_admin", {
      adminData,
    });
  } catch (error) {
    console.log(error);
    return res.redirect("/admin/view_admin");
  }
};
