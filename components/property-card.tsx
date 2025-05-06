"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface PropertyCardProps {
  property: {
    itemCode: string
    itemName: string
    itemPrice: number
    reviewAverage: number
    mediumImageUrls: string
    shopCode: string
    shopName: string
    startTime: string
    registDay: string
    itemUrl: string
    reviewCount: number
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { isLoggedIn, toggleFavorite, isFavorite } = useAuth()
  const favorite = isLoggedIn ? isFavorite(property.itemCode) : false
  const router = useRouter()
  const [showLoginDialog, setShowLoginDialog] = useState(false)

  // 商品名を50文字に制限する関数
  const truncateItemName = (name: string, maxLength: number) => {
    if (name.length <= maxLength) return name
    return name.substring(0, maxLength) + "..."
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isLoggedIn) {
      toggleFavorite(property.itemCode)
    } else {
      // ログインしていない場合はダイアログを表示
      setShowLoginDialog(true)
    }
  }

  const handleShopNameClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/local/${property.shopCode}`)
  }

  const handleLoginRedirect = () => {
    setShowLoginDialog(false)
    router.push("/login")
  }

  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={property.mediumImageUrls || "/placeholder.svg"}
          alt={property.itemName}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />

        {/* ショップ名 - クリック可能 */}
        <button
          onClick={handleShopNameClick}
          className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-100 transition-colors z-[10]"
        >
          {property.shopName}
        </button>

        {/* お気に入りボタン */}
        <button
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white transition-colors z-[10]"
          onClick={handleFavoriteClick}
          aria-label={favorite ? "お気に入りから削除" : "お気に入りに追加"}
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              favorite ? "fill-red-500 stroke-red-500" : "stroke-gray-600 fill-transparent",
            )}
          />
        </button>
      </div>

      {/* カード全体のリンク - z-indexを下げて他のクリック可能要素より優先度を下げる */}
      <Link
        href={property.itemUrl}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="absolute inset-0 z-[5]"
      >
        <span className="sr-only">{property.itemName}</span>
      </Link>

      <div className="mt-3">
        <h3 className="font-medium text-sm truncate">{truncateItemName(property.itemName, 100)}</h3>

        {property.reviewAverage > 0 && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
            <Star className="h-3.5 w-3.5 fill-black" />
            <span>{property.reviewAverage}</span>
            {property.reviewCount > 0 && <span>({property.reviewCount})</span>}
          </div>
        )}
      </div>

      {/* ログイン促進ダイアログ */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>ログインが必要です</DialogTitle>
            <DialogDescription>お気に入り機能を使用するには、ログインが必要です。</DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
            <Button variant="outline" onClick={() => setShowLoginDialog(false)}>
              キャンセル
            </Button>
            <Button onClick={handleLoginRedirect}>ログイン画面へ</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
