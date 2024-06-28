import { NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/api/authMiddleware";
import { logMiddleware } from "./middlewares/api/logMiddleware";


export default function middleware(request: Request) {
  if (request.url.includes("/api/blogs")) {
    const logResult = logMiddleware(request);
    console.log(logResult.response);
  }
  return NextResponse.next();
}