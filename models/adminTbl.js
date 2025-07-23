const mongoose = require("mongoose");
const multer = require("multer")
const path = require("path")

const imgpath = '/uploads/admin'

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  hobbies: {
    type: Array,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});






// const adminpics = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "..", imgpath))
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now())
//   }
// })
// adminSchema.statics.uploadimage = multer({ storage: adminpics }).single("avatar")
// adminSchema.statics.adpath = imgpath

const adminTbl = mongoose.model("admin", adminSchema);
module.exports = adminTbl;
