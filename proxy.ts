import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const BLOCKED_PREFIXES = [
  "/wp-admin",
  "/wp-content",
  "/wp-includes",
]

const BLOCKED_PATHS = [
  "/wp-login.php",
  "/xmlrpc.php",
]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (BLOCKED_PATHS.includes(pathname)) {
    return new NextResponse("Gone", { status: 410 })
  }

  if (BLOCKED_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return new NextResponse("Gone", { status: 410 })
  }

  if (pathname.endsWith(".php")) {
    return new NextResponse("Gone", { status: 410 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
