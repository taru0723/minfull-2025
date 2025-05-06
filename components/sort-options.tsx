"use client"

import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useOnClickOutside } from "@/hooks/use-click-outside"

export type SortOption = {
  label: string
  value: string
  sortFn: (a: any, b: any) => number
}

export const defaultSortOptions: SortOption[] = [
  {
    label: "新しい順",
    value: "newest",
    sortFn: (a, b) => b.itemCode.localeCompare(a.itemCode),
  },
  {
    label: "価格（高い順）",
    value: "price-desc",
    sortFn: (a, b) => b.itemPrice - a.itemPrice,
  },
  {
    label: "価格（安い順）",
    value: "price-asc",
    sortFn: (a, b) => a.itemPrice - b.itemPrice,
  },
  {
    label: "おすすめ順",
    value: "recommended",
    sortFn: (a, b) => b.reviewAverage - a.reviewAverage,
  },
  {
    label: "レビュー数順",
    value: "reviews",
    sortFn: (a, b) => b.reviewCount - a.reviewCount,
  },
]

interface SortOptionsProps {
  onSortChange: (sortFn: (a: any, b: any) => number, value: string) => void
  initialSortValue?: string
  sortOptions?: SortOption[]
  className?: string
}

export default function SortOptions({
  onSortChange,
  initialSortValue = "newest",
  sortOptions = defaultSortOptions,
  className = "",
}: SortOptionsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState<SortOption>(
    sortOptions.find((option) => option.value === initialSortValue) || sortOptions[0],
  )
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 外部クリックでドロップダウンを閉じる
  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  const handleSortChange = (option: SortOption) => {
    setSelectedSort(option)
    onSortChange(option.sortFn, option.value)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1 h-8 px-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">{selectedSort.label}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg border z-[9999]">
          <div className="py-1">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  selectedSort.value === option.value ? "bg-gray-50 font-medium" : ""
                }`}
                onClick={() => handleSortChange(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
