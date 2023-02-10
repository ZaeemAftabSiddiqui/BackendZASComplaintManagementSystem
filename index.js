const connectToMongo = require("./db");
const express = require("express");
const app = express();
const port = 5000;
connectToMongo();

// Middleware

const middileware = (req, res, next) => {
  console.log("middle ware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", middileware, (req, res) => {
  console.log("about page");
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
  console.log(`my app listening on port http://localhost:${port}`);
});
