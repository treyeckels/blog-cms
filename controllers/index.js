const router = require("express").Router();

const homeRoutes = require("./views/home");
const blogRoutes = require("./views/blogs");
const dashboardRoutes = require("./views/dashboard");
const authRoutes = require("./views/auth");

router.use("/", homeRoutes);
router.use("/blogs", blogRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/", authRoutes);

module.exports = router;
