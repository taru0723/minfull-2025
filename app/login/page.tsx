"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/auth"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()

  const [userId, setUserId] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!userId.trim()) {
      setError("ユーザーIDを入力してください")
      return
    }

    setIsSubmitting(true)

    try {
      const success = await login(userId.trim())

      if (success) {
        router.push("/")
      } else {
        setError("ユーザーIDが見つかりません")
      }
    } catch (err) {
      setError("ログイン中にエラーが発生しました")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="py-4 px-8 sm:px-12 md:px-16 border-b bg-white">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <ArrowLeft className="h-4 w-4" />
          <span>ホームに戻る</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-6">ログイン</h1>

          {error && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userId">ユーザーID</Label>
              <Input
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="ユーザーIDを入力"
                required
              />
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "ログイン中..." : "ログイン"}
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 pt-2">
              アカウントをお持ちでない方は{" "}
              <Link href="/register" className="text-primary hover:underline">
                新規登録
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
