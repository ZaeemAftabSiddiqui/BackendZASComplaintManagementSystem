require("dotenv").config();
const express = require("express");
const connectToMongo = require("./db");
const app = express();

// for all json data convert into object and show
app.use(express.json());
// I link routes files to make our routes easy
app.use(require("./routes/auth"));

connectToMongo();
// Middleware
const middileware = (req, res, next) => {
  console.log("middle ware");
  next();
};
const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
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
