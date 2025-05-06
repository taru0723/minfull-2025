"use client"

export const runtime = 'edge';

import { useState, useEffect, useMemo } from "react"
import { properties } from "@/data/properties"
import BackHeader from "@/components/back-header"
import PropertyCard from "@/components/property-card"
import Pagination from "@/components/pagination"
import Footer from "@/components/footer"
import MobileFooterNav from "@/components/mobile-footer-nav"
import { notFound } from "next/navigation"
import SortOptions, { defaultSortOptions } from "@/components/sort-options"

interface LocalPageProps {
  params: {
    shopCode: string
  }
}

export default function LocalPage({ params }: LocalPageProps) {
  const { shopCode } = params
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 30

  // useMemoを使用して、localPropertiesが不必要に再生成されないようにする
  const localProperties = useMemo(() => {
    return properties.filter((property) => property.shopCode === shopCode)
  }, [shopCode])

  // ショップ名を取得（最初に見つかったプロパティから）
  const shopName = localProperties.length > 0 ? localProperties[0].shopName : ""

  // プロパティが見つからない場合は404ページを表示
  if (localProperties.length === 0) {
    notFound()
  }

  const [sortedProperties, setSortedProperties] = useState<typeof localProperties>([])
  const [currentSortValue, setCurrentSortValue] = useState("newest")

  // 初期ソートを適用 - 依存配列を修正
  useEffect(() => {
    const initialSortFn = defaultSortOptions.find((option) => option.value === "newest")?.sortFn
    if (initialSortFn) {
      setSortedProperties([...localProperties].sort(initialSortFn))
    } else {
      setSortedProperties([...localProperties])
    }
  }, [localProperties]) // shopCodeが変わった時だけ実行

  // ソート関数を適用
  const handleSortChange = (sortFn: (a: any, b: any) => number, value: string) => {
    setCurrentSortValue(value)
    setSortedProperties([...localProperties].sort(sortFn))
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
          <h1 className="text-2xl font-bold">{`${shopName}のプロパティ`}</h1>
          <p className="text-muted-foreground mt-1">{`${shopName}で利用可能なすべての宿泊施設`}</p>
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
