"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // ページネーションの表示数を制限
  const maxPagesToShow = 5

  // 表示するページ番号の配列を生成
  const getPageNumbers = () => {
    const pages = []

    // 総ページ数が表示上限以下の場合はすべて表示
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // 現在のページが先頭付近の場合
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        for (let i = 1; i <= maxPagesToShow - 1; i++) {
          pages.push(i)
        }
        pages.push(totalPages)
      }
      // 現在のページが末尾付近の場合
      else if (currentPage > totalPages - Math.floor(maxPagesToShow / 2)) {
        pages.push(1)
        for (let i = totalPages - (maxPagesToShow - 2); i <= totalPages; i++) {
          pages.push(i)
        }
      }
      // 現在のページが中央付近の場合
      else {
        pages.push(1)
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push(totalPages)
      }
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-full"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">前のページ</span>
      </Button>

      {pageNumbers.map((page, index) => {
        // 省略記号を表示する条件
        if (index > 0 && pageNumbers[index] - pageNumbers[index - 1] > 1) {
          return (
            <div key={`ellipsis-${index}`} className="px-2">
              ...
            </div>
          )
        }

        return (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => onPageChange(page)}
            className="rounded-full min-w-[40px]"
          >
            {page}
          </Button>
        )
      })}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-full"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">次のページ</span>
      </Button>
    </div>
  )
}
