const express = require("express")

const routes = express.Router()


routes.use("/admin",require("../routes/admin-routes"))
routes.use("/",require("../routes/user-routes"))
// routes.use("/category",require("./category"))

module.exports = routes