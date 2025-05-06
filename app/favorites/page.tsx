"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useAuth } from "@/lib/auth"
import PropertyCard from "@/components/property-card"

// プロパティデータをインポート
import { properties } from "@/data/properties"

export default function FavoritesPage() {
  const router = useRouter()
  const { isLoggedIn, favorites } = useAuth()

  // 未ログイン時はログインページにリダイレクト
  if (!isLoggedIn) {
    if (typeof window !== "undefined") {
      router.push("/login")
    }
    return null
  }

  // お気に入りのプロパティを取得
  const favoriteProperties = properties.filter((prop) => favorites.includes(prop.itemCode))

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="py-4 px-8 sm:px-12 md:px-16 border-b bg-white">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <ArrowLeft className="h-4 w-4" />
          <span>ホームに戻る</span>
        </Link>
      </div>

      <div className="max-w-[2520px] mx-auto px-8 sm:px-12 md:px-16 py-8 w-full">
        <h1 className="text-2xl font-bold mb-6">お気に入り</h1>

        {favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {favoriteProperties.map((property) => (
              <PropertyCard key={property.itemCode} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-gray-500">お気に入りに追加された物件はありません</p>
            <Link href="/" className="text-primary hover:underline block mt-2">
              物件を探す
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
