const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  res.status(500);
});
app.get("/contact", (req, res) => {
  res.json({ number: 75879380947 });
});

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});