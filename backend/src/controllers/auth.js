import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All Fields are required! " });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be atleast 6 characters long!" });
    }

    const regex = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (!regex.test(email)) {
      return res
        .status(400)
        .json({ message: "Please provide a valid email address.." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        userprofilepic: newUser.userprofilepic,
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    console.error("Error in signup controller", error);
    res.status(500).json({ message: "Internal server error.." });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if(!email || !password) return res.status(400).json({message:"All fields are required!"})
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({message:"Invalid Credentials!"});

    const correctPassword = await bcrypt.compare(password,user.password);
    if(!correctPassword) return res.status(400).json({message:"Invalid credentials!"})

    generateToken(user._id,res);
    res.status(200).json({
      _id:user._id,
      username:user.username,
      email:user.email,
      userprofilepic:user.userprofilepic
    });

  } catch (error) {
    console.error("Error in signin controller", error);
    res.status(500).json({message:"Internal server error"});
  }
};

export const signout = (_, res) => {
  res.cookie("jwt","",{maxAge:0});
  res.status(200).json({message:"Successfully Logged Out"});
};
