"use client"

import { useRouter } from "next/navigation"
import { Search, Heart, User, Home } from "lucide-react"
import { useAuth } from "@/lib/auth"
import { cn } from "@/lib/utils"

export default function MobileFooterNav() {
  const router = useRouter()
  const { isLoggedIn } = useAuth()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 md:hidden z-50">
      <div className="flex items-center justify-around">
        <button onClick={() => router.push("/")} className="flex flex-col items-center justify-center p-2">
          <Home className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">ホーム</span>
        </button>

        <button onClick={() => router.push("/search")} className="flex flex-col items-center justify-center p-2">
          <Search className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">検索</span>
        </button>

        <button
          onClick={() => router.push(isLoggedIn ? "/favorites" : "/login")}
          className="flex flex-col items-center justify-center p-2"
        >
          <Heart className={cn("h-6 w-6", isLoggedIn ? "text-primary" : "text-gray-600")} />
          <span className="text-xs mt-1 text-gray-600">お気に入り</span>
        </button>

        <button
          onClick={() => router.push(isLoggedIn ? "/mypage" : "/login")}
          className="flex flex-col items-center justify-center p-2"
        >
          <User className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">{isLoggedIn ? "マイページ" : "ログイン"}</span>
        </button>
      </div>
    </div>
  )
}
