import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI||"");
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    isverified: { type: Boolean, required: true },
    isAdmin: { type: Boolean, required: true },
    forgotPasswordToken: { type: String, required: false },
    forgotPasswordTokenExpiry: { type: Date, required: false },
    verifyToken:{type:String,required:false},
    verifyTokenExpiry:{type:Date,required:false}
  }
  

);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;