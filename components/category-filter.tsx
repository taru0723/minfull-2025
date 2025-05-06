"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// カテゴリーを7行に分けて表示するためのデータ
const categoryRows = [
  [
    { id: "hokkaido", name: "北海道", isRegion: false, link: "/region/hokkaido" },
    { id: "tohoku", name: "東北", isRegion: true },
    { id: "aomori", name: "青森", isRegion: false, link: "/region/aomori" },
    { id: "iwate", name: "岩手", isRegion: false, link: "/region/iwate" },
    { id: "akita", name: "秋田", isRegion: false, link: "/region/akita" },
    { id: "miyagi", name: "宮城", isRegion: false, link: "/region/miyagi" },
    { id: "yamagata", name: "山形", isRegion: false, link: "/region/yamagata" },
    { id: "fukushima", name: "福島", isRegion: false, link: "/region/fukushima" },
  ],
  [
    { id: "kanto", name: "関東", isRegion: true },
    { id: "ibaraki", name: "茨城", isRegion: false, link: "/region/ibaraki" },
    { id: "tochigi", name: "栃木", isRegion: false, link: "/region/tochigi" },
    { id: "gunma", name: "群馬", isRegion: false, link: "/region/gunma" },
    { id: "saitama", name: "埼玉", isRegion: false, link: "/region/saitama" },
    { id: "chiba", name: "千葉", isRegion: false, link: "/region/chiba" },
    { id: "tokyo", name: "東京", isRegion: false, link: "/region/tokyo" },
    { id: "kanagawa", name: "神奈川", isRegion: false, link: "/region/kanagawa" },
  ],
  [
    { id: "chubu", name: "中部", isRegion: true },
    { id: "niigata", name: "新潟", isRegion: false, link: "/region/niigata" },
    { id: "toyama", name: "富山", isRegion: false, link: "/region/toyama" },
    { id: "ishikawa", name: "石川", isRegion: false, link: "/region/ishikawa" },
    { id: "fukui", name: "福井", isRegion: false, link: "/region/fukui" },
    { id: "yamanashi", name: "山梨", isRegion: false, link: "/region/yamanashi" },
    { id: "gifu", name: "岐阜", isRegion: false, link: "/region/gifu" },
    { id: "shizuoka", name: "静岡", isRegion: false, link: "/region/shizuoka" },
    { id: "aichi", name: "愛知", isRegion: false, link: "/region/aichi" },
  ],
  [
    { id: "kinki", name: "近畿", isRegion: true },
    { id: "shiga", name: "滋賀", isRegion: false, link: "/region/shiga" },
    { id: "mie", name: "三重", isRegion: false, link: "/region/mie" },
    { id: "kyoto", name: "京都", isRegion: false, link: "/region/kyoto" },
    { id: "osaka", name: "大阪", isRegion: false, link: "/region/osaka" },
    { id: "nara", name: "奈良", isRegion: false, link: "/region/nara" },
    { id: "wakayama", name: "和歌山", isRegion: false, link: "/region/wakayama" },
    { id: "hyogo", name: "兵庫", isRegion: false, link: "/region/hyogo" },
  ],
  [
    { id: "chugoku", name: "中国", isRegion: true },
    { id: "tottori", name: "鳥取", isRegion: false, link: "/region/tottori" },
    { id: "shimane", name: "島根", isRegion: false, link: "/region/shimane" },
    { id: "okayama", name: "岡山", isRegion: false, link: "/region/okayama" },
    { id: "hiroshima", name: "広島", isRegion: false, link: "/region/hiroshima" },
    { id: "yamaguchi", name: "山口", isRegion: false, link: "/region/yamaguchi" },
  ],
  [
    { id: "shikoku", name: "四国", isRegion: true },
    { id: "tokushima", name: "徳島", isRegion: false, link: "/region/tokushima" },
    { id: "kagawa", name: "香川", isRegion: false, link: "/region/kagawa" },
    { id: "ehime", name: "愛媛", isRegion: false, link: "/region/ehime" },
    { id: "kochi", name: "高知", isRegion: false, link: "/region/kochi" },
  ],
  [
    { id: "kyushu", name: "九州", isRegion: true },
    { id: "fukuoka", name: "福岡", isRegion: false, link: "/region/fukuoka" },
    { id: "saga", name: "佐賀", isRegion: false, link: "/region/saga" },
    { id: "nagasaki", name: "長崎", isRegion: false, link: "/region/nagasaki" },
    { id: "kumamoto", name: "熊本", isRegion: false, link: "/region/kumamoto" },
    { id: "oita", name: "大分", isRegion: false, link: "/region/oita" },
    { id: "miyazaki", name: "宮崎", isRegion: false, link: "/region/miyazaki" },
    { id: "kagoshima", name: "鹿児島", isRegion: false, link: "/region/kagoshima" },
    { id: "okinawa", name: "沖縄", isRegion: false, link: "/region/okinawa" },
  ],
]

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const renderCategoryItem = (category: {
    id: string
    name: string
    isRegion: boolean
    link?: string
  }) => {
    // 地域見出し（東北、関東など）の場合は黒背景白文字で表示
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
            selectedCategory === category.id
              ? "bg-black text-white border-black"
              : "bg-white text-black border-gray-300 hover:border-gray-500",
          )}
        >
          <span className="text-sm whitespace-nowrap">#{category.name}</span>
        </Link>
      )
    }

    // 通常のカテゴリーボタン
    return (
      <button
        key={category.id}
        className={cn(
          "flex items-center px-4 py-2 rounded-full border transition-colors",
          selectedCategory === category.id
            ? "bg-black text-white border-black"
            : "bg-white text-black border-gray-300 hover:border-gray-500",
        )}
        onClick={() => setSelectedCategory(category.id === selectedCategory ? null : category.id)}
      >
        <span className="text-sm whitespace-nowrap">#{category.name}</span>
      </button>
    )
  }

  return (
    <div className="py-4 max-w-[2520px] mx-auto">
      {categoryRows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex flex-wrap gap-3 mb-3">
          {row.map((category) => renderCategoryItem(category))}
        </div>
      ))}
    </div>
  )
}
