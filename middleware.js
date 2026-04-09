import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;

  if (req.nextUrl.pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const res = NextResponse.next();

  res.headers.set("X-Content-Type-Options", "nosniff");

  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  res.headers.set("X-Frame-Options", "DENY");

  const isDev = process.env.NODE_ENV !== "production";

  res.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https://images.unsplash.com",
      "font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  );

  return res;
}

export const config = {
  matcher: ["/:path*", "/admin/:path*"],
};
