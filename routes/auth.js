const express = require("express");
const router = express.Router();
const connectToMongo = require("../db");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "fill all field" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "email already exist" });
      }
      const user = new User({ name, email, phone, work, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "user signin successfully" });
        })
        .catch((err) =>
          res.status(500).json({ error: "Failed to registered" })
        );
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
