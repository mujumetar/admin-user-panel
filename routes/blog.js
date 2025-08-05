const express = require("express");
const blogCtl = require("../controller/blogCtl");
const blog = require("../models/blogSchema");
const routes = express.Router();

routes.get("/addBlog", blogCtl.addBlog);
routes.get("/viewBlog", blogCtl.viewBlog);
routes.post("/insertBlog", blog.uploadBlogImage, blogCtl.insertBlog);
routes.get("/deleteData/:id", blogCtl.deleteData);
routes.get("/updateData/:id", blogCtl.updateData);
routes.post("/editBlog", blog.uploadBlogImage, blogCtl.editBlog);
module.exports = routes;
