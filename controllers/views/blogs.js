const router = require("express").Router();

router.get("/new", (req, res) => {
  res.render("blogCreate");
});

router.get("/:id", (req, res) => {
  res.render("blogPost");
});

router.get("/edit/:id", (req, res) => {
  res.render("blogEdit");
});

module.exports = router;
