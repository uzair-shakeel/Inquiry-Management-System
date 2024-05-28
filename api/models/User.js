const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  cnic: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  program: { type: String, required: true },
  section: { type: String, required: true },
  dob: { type: Date, required: true },
  fathersName: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  batch: { type: Number, required: true },
  department: { type: String, required: true },
  departmentPrograms: { type: String, required: true },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
