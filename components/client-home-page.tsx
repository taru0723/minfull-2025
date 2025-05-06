"use client"

import { useState, useEffect, type ReactNode } from "react"
import Link from "next/link"
import CategoryFilter from "@/components/category-filter"
import PropertyCard from "@/components/property-card"
import SearchBar from "@/components/search-bar"
import Pagination from "@/components/pagination"
import Footer from "@/components/footer"
import UserMenu from "@/components/user-menu"
import MobileFooterNav from "@/components/mobile-footer-nav"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"

interface Property {
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

interface ClientHomePageProps {
  properties: Property[]
  title?: string
  description?: string
  sortComponent?: ReactNode
}

export default function ClientHomePage({
  properties,
  title = "本日、新しく追加された牛肉やお米等地域のお礼品情報",
  description,
  sortComponent,
}: ClientHomePageProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 30
  const { scrollDirection, scrolled } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  // ページ変更時に先頭にスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  // クライアントサイドでのみ実行するためのuseEffect
  useEffect(() => {
    setIsMobile(window.innerWidth < 768) // md breakpoint

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // 現在のページに表示するプロパティを計算
  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty)

  // 総ページ数を計算
  const totalPages = Math.ceil(properties.length / propertiesPerPage)

  // ヘッダーの表示/非表示の状態を計算
  const showHeader = !isMobile || !scrolled || scrollDirection === "up"

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <header
        className={cn(
          "border-b sticky top-0 bg-white z-10 transition-transform duration-300",
          isMobile && scrollDirection === "down" && scrolled ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="max-w-[2520px] mx-auto px-4 sm:px-8 md:px-16 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-8 w-8 bg-orange-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">み</span>
            </div>
            <span className="ml-2 font-bold text-orange-500 text-lg">んふる</span>
          </Link>

          {/* PC向けの検索バー */}
          <div className="hidden md:flex items-center justify-center flex-1 max-w-md mx-4">
            <SearchBar />
          </div>

          {/* PC向けのユーザーメニュー */}
          <div className="hidden md:flex items-center gap-4">
            <UserMenu />
          </div>

          {/* モバイル向けの検索バー */}
          {isMobile && (
            <div className="flex-1 mx-2">
              <SearchBar compact className="w-full" />
            </div>
          )}
        </div>
      </header>

      <main className="max-w-[2520px] mx-auto px-4 sm:px-8 md:px-16">
        {/* サイト紹介文と説明 */}
        <div className="py-6">
          <h1 className="text-2xl font-bold mb-2">
            あなたも今すぐ、素敵なふるさと納税を見賢く活用して、地域を応援しましょう！
          </h1>
          <p className="text-gray-600 mb-6">
            「みんふる」は、地域の魅力を共に発信し、ふるさと納税を通じて皆さまが大好きな故郷を応援するために作りました。新着情報をはじめとする多彩なふるさと納税の特産品やサービスを、見やすく整理して提供していきます。
          </p>

          <h2 className="text-xl font-bold">{title}</h2>
          {description && <p className="text-muted-foreground mt-1">{description}</p>}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{properties.length}件の検索結果</p>
          {sortComponent && <div className="relative z-[9999]">{sortComponent}</div>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          {currentProperties.length > 0 ? (
            currentProperties.map((property) => <PropertyCard key={property.itemCode} property={property} />)
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">該当する物件が見つかりませんでした</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="py-8 flex justify-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-2">市町村から探す</h2>
          <div className="overflow-x-auto">
            <CategoryFilter />
          </div>

          <h2 className="text-2xl font-bold mb-2 mt-10">管理人のおすすめから探す</h2>
          <div className="overflow-x-auto py-2">
            <div className="flex flex-wrap gap-3 mb-3">
              {[
                "松坂牛",
                "神戸牛",
                "米沢牛",
                "近江牛",
                "仙台牛",
                "飛騨牛",
                "但馬牛",
                "宮崎牛",
                "佐賀牛",
                "山形牛",
                "鹿児島黒豚",
                "コシヒカリ",
                "魚沼産コシヒカリ",
                "あきたこまち",
                "ひとめぼれ",
              ].map((keyword, index) => (
                <Link
                  key={index}
                  href={`/search?q=${encodeURIComponent(keyword)}`}
                  className="flex items-center px-4 py-2 rounded-full border border-gray-300 hover:border-gray-500 bg-white text-black transition-colors"
                >
                  <span className="text-sm whitespace-nowrap">#{keyword}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* PC向けのフッター */}
      <div className="hidden md:block">
        <Footer />
      </div>

      {/* モバイル向けのフッターナビゲーション */}
      <MobileFooterNav />
    </div>
  )
}
