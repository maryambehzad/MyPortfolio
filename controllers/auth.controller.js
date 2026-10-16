import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import bcrypt from "bcryptjs";

// Sign In
const signin = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status("401").json({ error: "User not found" });

    // Simple password check (or use bcrypt.compare if hashing passwords)
    if (user.password !== req.body.password) {
      return res
        .status("401")
        .json({ error: "Email and password don't match." });
    }

    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET || "YOUR_secret_key",
    );

    res.cookie("t", token, { expire: new Date() + 9999 });

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status("401").json({ error: "Could not sign in" });
  }
};

// Sign Out
const signout = (req, res) => {
  res.clearCookie("t");
  return res.status("200").json({ message: "Signed out successfully" });
};

// Required Authentication Middleware for Protected Routes
const requireSignin = expressjwt({
  secret: process.env.JWT_SECRET || "YOUR_secret_key",
  algorithms: ["HS256"],
  userProperty: "auth",
});

// Authorization Middleware
const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status("403").json({ error: "User is not authorized" });
  }
  next();
};

export default { signin, signout, requireSignin, hasAuthorization };
