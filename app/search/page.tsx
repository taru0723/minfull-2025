"use client"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { properties } from "@/data/properties"
import BackHeader from "@/components/back-header"
import PropertyCard from "@/components/property-card"
import Pagination from "@/components/pagination"
import Footer from "@/components/footer"
import MobileFooterNav from "@/components/mobile-footer-nav"
import SortOptions, { defaultSortOptions } from "@/components/sort-options"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  // useMemoを使用して検索結果を計算
  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return [...properties]
    }

    // 検索クエリを空白で分割して複数キーワードに対応
    const keywords = query.toLowerCase().split(/\s+/).filter(Boolean)

    // 検索クエリに一致するプロパティをフィルタリング
    return properties.filter((property) => {
      const searchableText = `${property.itemName} ${property.shopName}`.toLowerCase()

      // すべてのキーワードが含まれているかチェック（AND検索）
      return keywords.every((keyword) => searchableText.includes(keyword))
    })
  }, [query])

  const [sortedResults, setSortedResults] = useState<typeof properties>([])
  const [currentSortValue, setCurrentSortValue] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 30

  // 検索結果が変わったときだけ初期ソートを適用
  useEffect(() => {
    const initialSortFn = defaultSortOptions.find((option) => option.value === "newest")?.sortFn
    if (initialSortFn) {
      setSortedResults([...searchResults].sort(initialSortFn))
    } else {
      setSortedResults([...searchResults])
    }
  }, [searchResults])

  // ソート関数を適用
  const handleSortChange = (sortFn: (a: any, b: any) => number, value: string) => {
    setCurrentSortValue(value)
    setSortedResults([...searchResults].sort(sortFn))
  }

  // 現在のページに表示するプロパティを計算
  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = sortedResults.slice(indexOfFirstProperty, indexOfLastProperty)

  // 総ページ数を計算
  const totalPages = Math.ceil(sortedResults.length / propertiesPerPage)

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <BackHeader />

      <main className="max-w-[2520px] mx-auto px-8 sm:px-12 md:px-16 py-8 w-full">
        <div className="py-6">
          <h1 className="text-2xl font-bold">{query ? `"${query}" の検索結果` : "検索結果"}</h1>
          <p className="text-muted-foreground mt-1">
            {query ? `${sortedResults.length}件の物件が見つかりました` : "キーワードを入力して物件を検索してください"}
          </p>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{sortedResults.length}件の検索結果</p>
          <div className="relative z-[9999]">
            <SortOptions onSortChange={handleSortChange} initialSortValue={currentSortValue} />
          </div>
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
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>

      <MobileFooterNav />
    </div>
  )
}
