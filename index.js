const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/contact", (req, res) => {
  res.send("contact page");
});
app.get("/signin", (req, res) => {
  res.send("Login page");
});
app.get("/signup", (req, res) => {
  res.send("signup page");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
