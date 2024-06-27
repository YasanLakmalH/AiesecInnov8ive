import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI||"");
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
   
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;