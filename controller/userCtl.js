const Blog = require("../models/blogSchema");
const Category = require("../models/categorySchema");

const dashboard = async (req, res) => {
  try {
    const [blogs, categories] = await Promise.all([
      Blog.find({}),
      Category.find({}),
    ]);

    return res.render("user/index", {
      blog: blogs,
      category: categories,
    });
  } catch (error) {
    console.error("Dashboard Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const blogDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Blog.findById(id);

    if (!data) {
      return res.status(404).send("Blog not found");
    }

    return res.render("user/singleBlog", { data });
  } catch (error) {
    console.error("BlogDetails Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  dashboard,
  blogDetails,
};
