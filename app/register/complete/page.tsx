"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function RegisterCompletePage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/mypage")
    }, 5000)

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold mb-2">登録完了</h1>
        <p className="text-gray-600 mb-6">アカウントの登録が完了しました。</p>

        <Button onClick={() => router.push("/mypage")} className="w-full mb-4">
          マイページへ
        </Button>

        <p className="text-sm text-gray-500">{countdown}秒後に自動的にマイページへ移動します</p>
      </div>
    </div>
  )
}
