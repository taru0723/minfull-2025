"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  compact?: boolean
  className?: string
}

export default function SearchBar({ compact = false, className = "" }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      // 検索語を空白で分割し、エンコードして結合
      const searchTerms = searchTerm.trim().split(/\s+/).filter(Boolean)
      const encodedQuery = encodeURIComponent(searchTerms.join(" "))
      router.push(`/search?q=${encodedQuery}`)
    }
  }

  if (compact) {
    return (
      <form onSubmit={handleSearch} className={`w-full ${className}`}>
        <div className="relative">
          <Input
            type="text"
            placeholder="キーワードを入力"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-12 py-6 rounded-full border shadow-sm"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-orange-500 hover:bg-orange-600"
          >
            <Search className="h-4 w-4 text-white" />
            <span className="sr-only">検索</span>
          </Button>
        </div>
      </form>
    )
  }

  return (
    <form onSubmit={handleSearch} className={`w-full ${className}`}>
      <div className="relative">
        <Input
          type="text"
          placeholder="キーワードを入力"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-12 py-6 rounded-full border shadow-sm"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-orange-500 hover:bg-orange-600"
        >
          <Search className="h-4 w-4 text-white" />
          <span className="sr-only">検索</span>
        </Button>
      </div>
    </form>
  )
}
