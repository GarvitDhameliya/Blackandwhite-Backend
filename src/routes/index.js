const express = require("express");

const userRoute = require("./user.route");
const adminRoute = require("./admin.route.js");
const subadminRoute = require("./subadmin.route.js");
const facultyRoute = require("./faculty.route.js");
const studentRoute = require("./student.route.js");
const batchRoute = require("./batch.route.js");

const router = express.Router();

router.use("/user", userRoute);
router.use("/admin", adminRoute);
router.use("/subadmin", subadminRoute);
router.use("/faculty", facultyRoute);
router.use("/student", studentRoute);
router.use("/batch", batchRoute);

module.exports = router;