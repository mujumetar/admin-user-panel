
const express = require("express")

const adminCtl = require("../controller/adminCtl")
const routes = express.Router()
const admin = require("../models/adminSchema")



routes.get("/", adminCtl.dashboard)
routes.get("/add_admin", adminCtl.addAdmin)
routes.get("/view_admin", adminCtl.viewAdmin)
routes.post("/insertdata", admin.uploadAdminImage ,adminCtl.insertdata)
routes.get("/delete/:id", adminCtl.deleteAdmin)
routes.get("/update/:id", adminCtl.updateAdmin)
routes.get("/searchAdminData", adminCtl.searchAdminData)
routes.post("/updataAdminData", admin.uploadAdminImage, adminCtl.updataAdminData)
module.exports = routes