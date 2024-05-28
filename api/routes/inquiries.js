const express = require("express");
const router = express.Router();
const multer = require("multer"); // Import multer
const path = require("path");
const Inquiry = require("../models/Inquiry");
const auth = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.resolve(__dirname, "../frontend/public/uploads");
    console.log("Destination directory:", uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", async (req, res) => {
  try {
    const { name, fathersName, rollNumber, department, description } = req.body;
    const file = null;
    const inquiry = new Inquiry({
      name,
      fathersName,
      rollNumber,
      department,
      description,
      file,
    });

    await inquiry.save();
    res.json(inquiry);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Server error");
  }
});

router.get("/:department", async (req, res) => {
  try {
    const inquiries = await Inquiry.find({
      department: req.params.department,
    }).populate("user", ["name", "email"]);
    res.json(inquiries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

module.exports = router;
