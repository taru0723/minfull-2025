import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t mt-10 pt-8 pb-6 bg-gray-50">
      <div className="max-w-[2520px] mx-auto px-8 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* サポート */}
          <div>
            <h3 className="font-bold mb-4">サポート</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  ヘルプセンター
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  安全に関する情報
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  キャンセルオプション
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  コロナ対策
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  障害のある方へのサポート
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  近隣トラブルを報告
                </Link>
              </li>
            </ul>
          </div>

          {/* コミュニティ */}
          <div>
            <h3 className="font-bold mb-4">コミュニティ</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  災害救援
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  人種差別撲滅への取り組み
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  コミュニティフォーラム
                </Link>
              </li>
            </ul>
          </div>

          {/* ホスティング */}
          <div>
            <h3 className="font-bold mb-4">ホスティング</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  お部屋を掲載
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  オンライン体験をホスト
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  体験をホスト
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  責任あるホスティング
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  リソースセンター
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  コミュニティセンター
                </Link>
              </li>
            </ul>
          </div>

          {/* Rakumaについて */}
          <div>
            <h3 className="font-bold mb-4">Rakumaについて</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  ニュースルーム
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  新機能のご紹介
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  投資家のみなさまへ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:underline">
                  Rakumaについて
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Rakuma, Inc.</div>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-gray-600 hover:underline">
                プライバシー
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">
                利用規約
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">
                サイトマップ
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:underline">
                企業情報
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <button className="flex items-center text-sm font-medium">
              <Globe className="h-4 w-4 mr-2" />
              日本語 (JP)
            </button>
            <button className="text-sm font-medium">¥ JPY</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
