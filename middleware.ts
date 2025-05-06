import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // デフォルトのルートを設定
  if (request.nextUrl.pathname === "/") {
    return NextResponse.next()
  }

  return NextResponse.next()
}
