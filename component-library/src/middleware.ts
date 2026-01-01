import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = request.nextUrl;

  // If user is not authenticated and trying to access /userinfo, redirect to /login
  if (pathname.startsWith("/userinfo") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If user is authenticated and not on /userinfo, redirect to /userinfo
  if (token && pathname !== "/userinfo" && !pathname.startsWith("/api")) {
    return NextResponse.redirect(new URL("/userinfo", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};