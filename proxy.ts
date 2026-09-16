import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { goneImageStems } from "@/lib/gone-images"

const BLOCKED_PREFIXES = [
  "/wp-admin",
  "/wp-content",
  "/wp-includes",
]

const BLOCKED_PATHS = [
  "/wp-login.php",
  "/xmlrpc.php",
]

const IMAGE_EXTENSION = /\.(webp|avif|jpe?g|png|gif|svg|ico|mp4)$/i
const VARIANT_SUFFIX = /-(sm|md|lg|xl)$/i

function imageStem(pathname: string) {
  return pathname.replace(IMAGE_EXTENSION, "").replace(VARIANT_SUFFIX, "")
}

function isGoneImage(pathname: string) {
  if (!IMAGE_EXTENSION.test(pathname)) return false

  let decoded = pathname
  try {
    decoded = decodeURIComponent(pathname)
  } catch {
    decoded = pathname
  }

  return goneImageStems.has(imageStem(decoded))
}

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

  if (isGoneImage(pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Cache-Control": "public, max-age=3600",
        "X-Robots-Tag": "noindex",
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/wp-admin/:path*",
    "/wp-content/:path*",
    "/wp-includes/:path*",
    "/wp-login.php",
    "/xmlrpc.php",
    "/:path*.php",
    "/pages/:path*",
  ],
}
