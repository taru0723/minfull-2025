"use client"

import { useState } from "react"
import { properties } from "@/data/properties"
import BackHeader from "@/components/back-header"
import PropertyCard from "@/components/property-card"
import Pagination from "@/components/pagination"
import Footer from "@/components/footer"
import MobileFooterNav from "@/components/mobile-footer-nav"
import { prefectureNameMap } from "@/lib/prefecture-data"
import { notFound } from "next/navigation"
import SortOptions, { defaultSortOptions } from "@/components/sort-options"

interface RegionPageProps {
  params: {
    region: string
  }
}

export default function RegionPage({ params }: RegionPageProps) {
  const { region } = params
  const [currentPage, setCurrentPage] = useState(1)
  const [sortedProperties, setSortedProperties] = useState<typeof properties>([])
  const [currentSortValue, setCurrentSortValue] = useState("newest")
  const propertiesPerPage = 30

  // 都道府県名を取得
  const prefectureName = prefectureNameMap[region]

  // 都道府県が存在しない場合は404ページを表示
  if (!prefectureName) {
    notFound()
  }

  // 地域関連のプロパティをフィルタリング
  // 実際のデータでは、shopNameやその他の属性で地域関連のプロパティをフィルタリングします
  // この例では、デモ用に全プロパティを表示しています
  const regionProperties = properties

  // 初期ソートを適用
  if (sortedProperties.length === 0) {
    const initialSortFn = defaultSortOptions.find((option) => option.value === "newest")?.sortFn
    if (initialSortFn) {
      setSortedProperties([...regionProperties].sort(initialSortFn))
    } else {
      setSortedProperties([...regionProperties])
    }
  }

  // ソート関数を適用
  const handleSortChange = (sortFn: (a: any, b: any) => number, value: string) => {
    setCurrentSortValue(value)
    setSortedProperties([...regionProperties].sort(sortFn))
  }

  // 現在のページに表示するプロパティを計算
  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = sortedProperties.slice(indexOfFirstProperty, indexOfLastProperty)

  // 総ページ数を計算
  const totalPages = Math.ceil(sortedProperties.length / propertiesPerPage)

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <BackHeader />

      <main className="max-w-[2520px] mx-auto px-8 sm:px-12 md:px-16 py-8 w-full">
        <div className="py-6">
          <h1 className="text-2xl font-bold">{prefectureName}のプロパティ</h1>
          <p className="text-muted-foreground mt-1">{prefectureName}で利用可能なすべての宿泊施設</p>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{sortedProperties.length}件の検索結果</p>
          <div className="relative z-[9999]">
            <SortOptions onSortChange={handleSortChange} initialSortValue={currentSortValue} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          {currentProperties.map((property) => (
            <PropertyCard key={property.itemCode} property={property} />
          ))}
        </div>

        <div className="py-8 flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>

      <MobileFooterNav />
    </div>
  )
}
