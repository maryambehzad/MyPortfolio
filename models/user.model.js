import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
    trim: true,
  },
  email: {
    type: String,
    required: "Email is required",
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    trim: true,
  },
  password: {
    type: String,
    required: "Password is required",
  },
  admin: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
