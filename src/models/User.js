import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Software T: Define User schema structure
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Software T: Hash password before saving to database

  // Software T: Only hash if password was modified
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);

  // Software T: Replace plain password with hashed version
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

// Software T: Method to compare entered password with stored hash
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
