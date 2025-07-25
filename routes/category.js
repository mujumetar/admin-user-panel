const express = require("express");
const routes = express.Router();
const categoryCtl = require("../controller/categoryCtl");
const category = require("../models/categorySchema");

routes.get("/addAdmin",categoryCtl.addCategory);
routes.get("/viewAdmin",categoryCtl.viewCategory);
routes.post("/insertCategory",category.uploadCategoryImage,categoryCtl.insertCategory);
routes.get("/deleteData/:id", categoryCtl.deleteCategory);
routes.get("/editData/:id", categoryCtl.editCategoryPage);
routes.post("/updateCategory",category.uploadCategoryImage, categoryCtl.updateCategory);
module.exports = routes