import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");
  const signInUrl = new URL("/auth/sign-in", request.url);
  const homeUrl = new URL("/", request.url);

  if (accessToken && request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(homeUrl);
  }

  if (!accessToken && request.nextUrl.pathname.startsWith("/my-page")) {
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/my-page/:path*"],
};
