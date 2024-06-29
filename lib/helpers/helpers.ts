import { NextRequest } from "next/server"
import jwt from 'jsonwebtoken'  

export const verifyToken = (request: NextRequest) => {
 try {
    const token = request.cookies.get('token')?.value || ''
    jwt.verify(token, process.env.JWT_SECRET!);
    return true;
 } catch (eror:any) {
    console.log("Invalid Token")
    return false;
 }

 
}