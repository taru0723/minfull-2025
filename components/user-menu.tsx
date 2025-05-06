"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Menu, User, Heart, LogOut, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth"
import { useOnClickOutside } from "@/hooks/use-click-outside"

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isLoggedIn, logout } = useAuth()
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="outline"
        className="flex items-center gap-2 rounded-full border shadow-sm p-1 pl-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-4 w-4" />
        <div className="flex items-center">
          {isLoggedIn && user?.displayName && (
            <span className="text-sm mr-2 max-w-[100px] truncate">{user.displayName}</span>
          )}
          <User className="h-6 w-6 text-slate-500 bg-slate-200 rounded-full p-0.5" />
        </div>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-64 bg-white rounded-lg shadow-md border z-50 overflow-hidden">
          <div className="p-4">
            {isLoggedIn ? (
              <>
                <div className="space-y-3">
                  <Link
                    href="/mypage"
                    className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <UserCircle className="h-5 w-5" />
                    <span>マイページ</span>
                  </Link>
                  <Link
                    href="/favorites"
                    className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="h-5 w-5" />
                    <span>お気に入り</span>
                  </Link>
                  <button
                    className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md w-full text-left"
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                    }}
                  >
                    <LogOut className="h-5 w-5" />
                    <span>ログアウト</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3">
                  <Link
                    href="/login"
                    className="flex items-center justify-center bg-primary text-white p-2 rounded-md w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    ログイン
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center justify-center border border-gray-300 p-2 rounded-md w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    新規登録
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
