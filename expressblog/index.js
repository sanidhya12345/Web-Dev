const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


app.use(express.static(path.join(__dirname, "static")));
app.use("/",require(path.join(__dirname,"routers/blog.js")))


app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});