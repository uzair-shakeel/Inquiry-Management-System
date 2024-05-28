const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const inquiryRoutes = require("./routes/inquiries");
const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://uzair_test:password111@cluster0.b5esxyy.mongodb.net/inquiry?retryWrites=true&w=majority&appName=Cluster0"
);

app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/inquiries", inquiryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
