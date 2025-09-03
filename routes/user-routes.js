const express = require("express");
const userCtl = require("../controller/userCtl");

const router = express.Router();

router.get("/", userCtl.dashboard);

router.get("/blogDetails/:id", userCtl.blogDetails);

module.exports = router;
