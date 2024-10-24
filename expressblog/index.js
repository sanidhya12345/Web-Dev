const express = require("express");
var { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const path = require("path");

// app.engine("handlebars", exphbs());

app.engine(
  ".handlebars",
  engine({
    extname: "handlebars",
    defaultLayout: "main",
    layoutsDir: "views/layouts",
  })
);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routers/blog.js")));

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});