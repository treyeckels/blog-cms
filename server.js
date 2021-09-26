const path = require("path");
const routes = require("./controllers");
const express = require("express");
var exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(PORT, () =>
  console.log(`Server started on http://localost:${PORT} `)
);
