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

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuth()

  const [userId, setUserId] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!userId.trim()) {
      setError("ユーザーIDは必須です")
      return
    }

    setIsSubmitting(true)

    try {
      const success = await register({
        userId: userId.trim(),
        displayName: displayName.trim() || undefined,
        email: email.trim() || undefined,
      })

      if (success) {
        router.push("/register/complete")
      } else {
        setError("このユーザーIDは既に使用されています")
      }
    } catch (err) {
      setError("登録中にエラーが発生しました")
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
          <h1 className="text-2xl font-bold mb-6">アカウント登録</h1>

          {error && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userId">
                ユーザーID <span className="text-red-500">*</span>
              </Label>
              <Input
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="必須項目です"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="displayName">
                表示名 <span className="text-gray-400">(任意)</span>
              </Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="表示名を入力"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                メールアドレス <span className="text-gray-400">(任意)</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "登録中..." : "登録する"}
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 pt-2">
              既にアカウントをお持ちの方は{" "}
              <Link href="/login" className="text-primary hover:underline">
                ログイン
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
