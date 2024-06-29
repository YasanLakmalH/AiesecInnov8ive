import User from "@/lib/modals/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const POST = async (request: Request) => {
    const body = await request.json();
    const { username, password } = body;
  
    try {
      // Check if the user exists
      const existingUser = await User.findOne({ username });
      if (!existingUser) {
        console.log("User does not exist")
        return new NextResponse("User does not exist", { status: 404 });
      }

      // Compare the password
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        console.log("Invalid credentials")
        return new NextResponse("Invalid credentials", { status: 401 });
      }
  
      // Create a JWT token
      const payload = { userId: existingUser._id };
      const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1d' });
  
      const response = new NextResponse(JSON.stringify({ message: "Login successful"}), { status: 200 });
      response.cookies.set('token', token, { httpOnly: true,});
      return response;
  
    } catch (error: any) {
      return new NextResponse("Error during login: " + error.message, { status: 500 });
    }
  };