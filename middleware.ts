import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/helpers/helpers'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path=== '/' || path === '/Login' || path === '/Signup' 
  const isVerifiedToken = verifyToken(request);

  if (isPublicPath && isVerifiedToken) {
    return NextResponse.redirect(new URL('/Dashboard',request.nextUrl))
  }
  
  if (!isPublicPath && !isVerifiedToken) {
    return NextResponse.redirect(new URL('/Login',request.nextUrl))
  }
}
 
export const config = {
  matcher: [
    '/',
    '/Dashboard',
    '/Login',
    '/Signup'

  ]
}