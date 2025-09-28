import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;

    // Example: Protect /admin route
    if (req.nextUrl.pathname.startsWith("/admin")) {
      if (token?.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }

    // Example: Protect /dashboard route (only logged in users)
    if (req.nextUrl.pathname.startsWith("/profile")) {
      if (!token) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // general check: must be logged in
    },
  }
);

export const config = {
  matcher: ["/profile/:path*", "/admin/:path*"], // apply to specific routes
};
