const router = require("express").Router();

router.get("/", (req, res) => {
  const blogs = [
    {
      title: "First Blog",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus diam, vehicula id elementum sit amet, accumsan at tellus. Donec sed lobortis lectus. Quisque dapibus lacinia orci, iaculis sagittis nisl pharetra eu. Cras sollicitudin lacinia lacus nec semper. Duis nec ligula eros. Phasellus bibendum mauris vel laoreet condimentum.",
      user: {
        userName: "teckels",
        name: "Trey Eckels",
      },
      createdAt: "YYYY-MM-DD HH:MM:SS",
    },
    {
      title: "Second Blog",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus diam, vehicula id elementum sit amet, accumsan at tellus. Donec sed lobortis lectus. Quisque dapibus lacinia orci, iaculis sagittis nisl pharetra eu. Cras sollicitudin lacinia lacus nec semper. Duis nec ligula eros. Phasellus bibendum mauris vel laoreet condimentum.",
      user: {
        userName: "teckels",
        name: "Trey Eckels",
      },
      createdAt: "YYYY-MM-DD HH:MM:SS",
    },
  ];
  res.render("home", { blogs });
});

module.exports = router;
