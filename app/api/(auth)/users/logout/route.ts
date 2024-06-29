import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
try {
    const response = new NextResponse(JSON.stringify({ message: "Logout successful" }), { status: 200 });
    response.cookies.set('token', '', { httpOnly: true,expires: new Date(0)});
    return response;

} catch (error) {
    return NextResponse.json({ message: "Error during logout: " + error.message }, { status: 500 })
}
}