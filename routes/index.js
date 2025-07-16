const express = require("express");
const routes = express.Router();



routes.use("/", require("./user-routes"));
routes.use("/admin", require("./admin-routes"));

module.exports = routes;
