import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BackHeader() {
  return (
    <div className="py-4 px-8 sm:px-12 md:px-16 border-b bg-white">
      <Link href="/" className="flex items-center gap-2 w-fit">
        <ArrowLeft className="h-4 w-4" />
        <span>ホームに戻る</span>
      </Link>
    </div>
  )
}
