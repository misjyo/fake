const express = require("express");
const adminRoutes = express.Router();
const { adminRegister,adminLogin } = require("../../controller/admin/admin.controller")

adminRoutes.post("/register", adminRegister);
adminRoutes.post("/login", adminLogin);

module.exports = { adminRoutes };
