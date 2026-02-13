import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Software T: Function to generate JWT token
const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};

// Software T: Register new user
export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Software T: Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Software T: Create new user (password gets hashed automatically)
    const user = await User.create({
      name,
      email,
      password
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Software T: Login existing user
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // Software T: Validate email and password
    if (user && (await user.matchPassword(password))) {

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      });

    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
