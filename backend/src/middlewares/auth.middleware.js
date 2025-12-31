import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token)
      return res.status(401).json({ message: "Unauthorized Access.." });

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) return res.status(401).json({ message: "Invalid Token" });
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    req.user = user;

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError")
      return res.status(401).json({ message: "Invalid token" });

    if (error.name === "TokenExpiredError")
      return res.status(401).json({ message: "Token expired" });

    res.status(500).json({ message: "Internal server error" });
  }
};
