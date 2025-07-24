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

// module.exports.viewAdmin = async (req, res) => {
//   try {
//     let page = parseInt(req.query.page) || 0;
//     let perPage = 50;
//     let search = req.query.searchAdmin || "";

//     let adminData = await admin
//       .find({
//         $or: [
//           { name: { $regex: search, $options: "i" } },
//           { email: { $regex: search, $options: "i" } },
//           { city: { $regex: search, $options: "i" } },
//           { gender: { $regex: search, $options: "i" } },
//           { qualification: { $regex: search, $options: "i" } },
//         ],
//       })
//       .sort({ _id: 1 })
//       .skip(page * perPage)
//       .limit(perPage);

//     let countAllAdminRecord = await admin
//       .find({
//         $or: [
//           { name: { $regex: search, $options: "i" } },
//           { email: { $regex: search, $options: "i" } },
//           { city: { $regex: search, $options: "i" } },
//           { gender: { $regex: search, $options: "i" } },
//           { qualification: { $regex: search, $options: "i" } },
//         ],
//       })
//       .countDocuments();
//     let totalPage = Math.ceil(countAllAdminRecord / perPage);

//     return res.render("view_admin", {
//       adminData,
//       totalPage,
//       search,
//       page,
//     });
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };

// module.exports.searchAdminData = async (req, res) => {
//   try {
//     let search = req.query.searchAdmin || "";

//     let page = parseInt(req.query.page) || 1;
//     let perPage = 2;

//     let searchData = await admin
//       .find({
//         $or: [
//           { name: { $regex: search, $options: "i" } },
//           { email: { $regex: search, $options: "i" } },
//           { city: { $regex: search, $options: "i" } },
//           { gender: { $regex: search, $options: "i" } },
//           { qualification: { $regex: search, $options: "i" } },
//         ],
//       })
//       .skip((page - 1) * perPage)
//       .limit(perPage);

//     let totalData = await admin.countDocuments({
//       $or: [
//         { name: { $regex: search, $options: "i" } },
//         { email: { $regex: search, $options: "i" } },
//         { city: { $regex: search, $options: "i" } },
//         { gender: { $regex: search, $options: "i" } },
//         { qualification: { $regex: search, $options: "i" } },
//       ],
//     });

//     let totalPages = Math.ceil(totalData / perPage);

//     return res.render("viewAdmin", {
//       adminData: searchData,
//       currentPage: page,
//       totalPages,
//       search,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.redirect("/admin/view_admin");
//   }
// };

// controllers/admin.controller.js
const escapeRegex = (str = "") => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const buildFilter = (search = "") => {
  if (!search) return {};
  const regex = new RegExp(escapeRegex(search), "i");
  return {
    $or: [
      { name: regex },
      { email: regex },
      { city: regex },
      { gender: regex },
      { qualification: regex },
    ],
  };
};

const parsePaging = (req) => {
  const page = Math.max(parseInt(req.query.page, 10) || 1, 1); // 1-based
  const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 50, 1), 200); // cap to 200
  const skip = (page - 1) * limit;
  return { page, limit, skip };
};

module.exports.viewAdmin = async (req, res, next) => {
  try {
    const search = (req.query.searchAdmin || "").trim();
    const filter = buildFilter(search);
    const { page, limit, skip } = parsePaging(req);

    const [adminData, total] = await Promise.all([
      admin.find(filter).sort({ _id: 1 }).skip(skip).limit(limit).lean(),
      admin.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit);

    return res.render("view_admin", {
      adminData,
      totalPages,
      total,
      search,
      page,
      limit,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports.searchAdminData = async (req, res, next) => {
  try {
    const search = (req.query.searchAdmin || "").trim();
    const filter = buildFilter(search);
    const { page, limit, skip } = parsePaging(req);

    const [adminData, total] = await Promise.all([
      admin.find(filter).skip(skip).limit(limit).lean(),
      admin.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit);

    return res.render("view_admin", {
      adminData,
      currentPage: page,
      totalPages,
      total,
      search,
      limit,
    });
  } catch (err) {
    return next(err);
  }
};
