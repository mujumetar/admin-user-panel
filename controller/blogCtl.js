const blog = require("../models/blogSchema");
const category = require("../models/categorySchema");
const fs = require("fs");
module.exports.addBlog = async (req, res) => {
  let categories = await category.find({})
  return res.render("addBlog");
};
module.exports.viewBlog = async (req, res) => {
  try {
    let page = 0;

    let perPage = 2;
    let search = "";
    if (req.query.searchBlog) {
      search = req.query.searchBlog;
    }
    if (req.query.page) {
      page = req.query.page;
    }
    let data = await blog
      .find({
        $or: [{ blogName: { $regex: search, $options: "i" } }],
      })
      .sort({ _id: -1 })
      .skip(page * perPage)
      .limit(perPage);

    let totalCount = await blog.find({}).countDocuments();

    let totalPage = Math.ceil(totalCount / perPage);

    return res.render("viewBlog", {
      data,
      totalPage,
      search,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.insertBlog = async (req, res) => {
  const { category, blogName, blogDesc } = req.body;
  const blogImage = req.file.path;
  try {
    let data = await blog.create({
      category,
      blogName,
      blogDesc,
      blogImage,
    });

    console.log("blog added successfully");

    return res.redirect("/admin/blog/viewBlog");
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports.updateData = async (req, res) => {
  let id = req.params.id;
  try {
    let categories = await category.find({});

    const data = await blog.findById(id);

    return res.render("updateBlog", {
      categories,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.editBlog = async (req, res) => {
  const { id, blogName, blogDesc } = req.body;
  const blogImage = req.file;

  try {
    const data = await blog.findById(id);
    if (!data) {
      return res.redirect("/admin/blog/viewBlog");
    }
    const updateData = {
      blogName,
      blogDesc,
    };

    if (req.file) {
      if (data.blogImage && fs.existsSync(data.blogImage)) {
        fs.unlinkSync(data.blogImage);
      }

      updateData.blogImage = req.file.path;
    }

    const updateBlog = await blog.findByIdAndUpdate(id, updateData);

    return res.redirect("/admin/blog/viewBlog");
  } catch (err) {
    console.log(err);
    return false;
  }
};
module.exports.deleteData = async (req, res) => {
  let id = req.params.id;
  try {
    const deleted = await blog.findByIdAndDelete(id);
    console.log("blog deleted successfully");
    return res.redirect("/admin/blog/viewBlog");
  } catch (error) {
    console.log(error);
  }
};
