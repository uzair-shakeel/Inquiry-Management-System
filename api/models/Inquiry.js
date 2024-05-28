const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    fathersName: { type: String, required: true },
    rollNumber: { type: String, required: true },
    department: { type: String, required: true },
    description: { type: String, required: true },
    file: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", InquirySchema);
