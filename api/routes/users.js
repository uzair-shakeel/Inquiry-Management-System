const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const {
    registrationNumber,
    name,
    cnic,
    email,
    password,
    program,
    section,
    dob,
    fathersName,
    contact,
    address,
    batch,
    department,
    departmentPrograms,
  } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({
      registrationNumber,
      name,
      cnic,
      email,
      password,
      program,
      section,
      dob,
      fathersName,
      contact,
      address,
      batch,
      department,
      departmentPrograms,
    });
    console.log("Running");
    await user.save();

    console.log(user);

    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      "your_jwt_secret",
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Create JWT payload
    const payload = {
      user: { id: user.id },
    };

    // Generate JWT token
    jwt.sign(
      payload,
      "your_jwt_secret",
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;

        // Set token in cookie
        res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // Max age in milliseconds

        // Send role in localStorage
        res.json({ role: user.role });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

module.exports = router;
