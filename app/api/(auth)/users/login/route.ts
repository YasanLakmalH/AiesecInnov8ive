import User from "@/lib/modals/User";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    const body = await request.json();
    const { email, password } = body;
  
    try {
      // Check if the user exists
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return new NextResponse("User does not exist", { status: 404 });
      }

      // Compare the password
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        return new NextResponse("Invalid credentials", { status: 401 });
      }
  
      // Create a JWT token
      const payload = { userId: existingUser._id };
      const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });
  
      return new NextResponse(JSON.stringify({ message: "Login successful", user: existingUser, token }), { status: 200 });
  
    } catch (error: any) {
      return new NextResponse("Error during login: " + error.message, { status: 500 });
    }
  };