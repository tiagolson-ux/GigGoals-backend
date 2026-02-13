import User from "../models/User.js";
import bcrypt from "bcryptjs";
// Software T: Controller function to handle user registration

export const loginUser = async (req, res) => {
  try {
    // Software T: get email and password from request
    const { email, password } = req.body;

    // Software T: check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Software T: compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Software T: successful login response
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  export const registerUser = async (req, res) => {
export const loginUser = async (req, res) => {
  try {
    // Software T: get email and password from request
    const { email, password } = req.body;
};
