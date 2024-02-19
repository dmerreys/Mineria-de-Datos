import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100,
      },
    ocupation: {
        type: String,
        required: true,
        min: 2,
        max: 100,
      },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("usuarios", UserSchema);
export default User;
