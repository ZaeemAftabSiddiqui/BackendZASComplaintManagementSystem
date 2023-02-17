const express = require("express");
const router = express.Router();
const connectToMongo = require("../db");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "fill all fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    }
    const user = new User({ name, email, phone, work, password, cpassword });
    await user.save();
    res.status(201).json({ message: "user signin successfully" });
  } catch (err) {
    console.log(err);
  }
});
//Login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill data" });
    }
    const userLogin = await User.findOne({ email });
    console.log(userLogin);
    if (!userLogin) {
      res.status(400).json({ error: "user error" });
    } else {
      res.json({ message: "user Sign in successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
