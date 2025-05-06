"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { getMunicipalityData, type MunicipalityGroup } from "@/lib/prefecture-data"

// 通常のカテゴリーフィルターの最初の行（都道府県カテゴリー）
const prefectureCategories = [
  { id: "hokkaido", name: "北海道", isRegion: false, link: "/region/hokkaido" },
  { id: "tohoku", name: "東北", isRegion: true },
  { id: "aomori", name: "青森", isRegion: false, link: "/region/aomori" },
  { id: "iwate", name: "岩手", isRegion: false, link: "/region/iwate" },
  { id: "akita", name: "秋田", isRegion: false, link: "/region/akita" },
  { id: "miyagi", name: "宮城", isRegion: false, link: "/region/miyagi" },
  { id: "yamagata", name: "山形", isRegion: false, link: "/region/yamagata" },
  { id: "fukushima", name: "福島", isRegion: false, link: "/region/fukushima" },
]

interface RegionCategoryFilterProps {
  regionCode: string
}

export default function RegionCategoryFilter({ regionCode }: RegionCategoryFilterProps) {
  // 都道府県の市町村データを取得
  const municipalities: MunicipalityGroup = getMunicipalityData(regionCode)

  // 都道府県カテゴリーの行をレンダリング
  const renderPrefectureRow = () => {
    return (
      <div className="flex flex-wrap gap-3 mb-3">
        {prefectureCategories.map((category) => {
          // 地域見出し（東北など）の場合は黒背景白文字で表示
          if (category.isRegion) {
            return (
              <div
                key={category.id}
                className="flex items-center px-4 py-2 rounded-full bg-black text-white border border-black"
              >
                <span className="text-sm whitespace-nowrap">{category.name}</span>
              </div>
            )
          }

          // リンクがある場合はLinkコンポーネントを使用
          if (category.link) {
            return (
              <Link
                key={category.id}
                href={category.link}
                className={cn(
                  "flex items-center px-4 py-2 rounded-full border transition-colors",
                  category.id === regionCode
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:border-gray-500",
                )}
              >
                <span className="text-sm whitespace-nowrap">#{category.name}</span>
              </Link>
            )
          }

          return null
        })}
      </div>
    )
  }

  // 市町村カテゴリーの行をレンダリング
  const renderMunicipalityRows = () => {
    return Object.entries(municipalities).map(([rowTitle, municipalityList]) => {
      // 市町村がない行は表示しない
      if (municipalityList.length === 0) {
        return null
      }

      return (
        <div key={rowTitle} className="flex flex-wrap gap-3 mb-3">
          {/* 行のタイトル（あ行、か行など） */}
          <div className="flex items-center px-4 py-2 rounded-full bg-black text-white border border-black">
            <span className="text-sm whitespace-nowrap">{rowTitle}</span>
          </div>

          {/* 市町村のリンク */}
          {municipalityList.map((municipality) => (
            <Link
              key={municipality.id}
              href={municipality.link}
              className="flex items-center px-4 py-2 rounded-full border border-gray-300 hover:border-gray-500 bg-white text-black transition-colors"
            >
              <span className="text-sm whitespace-nowrap">{municipality.name}</span>
            </Link>
          ))}
        </div>
      )
    })
  }

  return (
    <div className="py-4 max-w-[2520px] mx-auto">
      {/* 都道府県カテゴリーの行 */}
      {renderPrefectureRow()}

      {/* 市町村カテゴリーの行 */}
      {renderMunicipalityRows()}
    </div>
  )
}
