const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const { name, fathersName, rollNumber, department, description, file } =
    req.body;

  try {
    const inquiry = new Inquiry({
      name,
      fathersName,
      rollNumber,
      department,
      description,
      file,
      user: req.user.id,
    });

    await inquiry.save();
    res.json(inquiry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/:department", auth, async (req, res) => {
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

module.exports = router;
