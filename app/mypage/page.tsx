"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Edit2, Check, X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth"
import PropertyCard from "@/components/property-card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// プロパティデータをインポート
import { properties } from "@/data/properties"

export default function MyPage() {
  const router = useRouter()
  const { user, isLoggedIn, updateUser, favorites, deleteAccount } = useAuth()

  const [editingField, setEditingField] = useState<string | null>(null)
  const [editValue, setEditValue] = useState("")
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  // 未ログイン時はログインページにリダイレクト
  if (!isLoggedIn || !user) {
    if (typeof window !== "undefined") {
      router.push("/login")
    }
    return null
  }

  const startEditing = (field: string, value = "") => {
    setEditingField(field)
    setEditValue(value)
  }

  const cancelEditing = () => {
    setEditingField(null)
    setEditValue("")
  }

  const saveEdit = (field: string) => {
    if (field === "displayName") {
      updateUser({ displayName: editValue.trim() || undefined })
    } else if (field === "email") {
      updateUser({ email: editValue.trim() || undefined })
    }

    setEditingField(null)
    setEditValue("")
  }

  // アカウント削除処理
  const handleDeleteAccount = () => {
    deleteAccount()
    router.push("/")
  }

  // お気に入りのプロパティを取得
  const favoriteProperties = properties.filter((prop) => favorites.includes(prop.itemCode))

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="py-4 px-8 sm:px-12 md:px-16 border-b bg-white">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <ArrowLeft className="h-4 w-4" />
          <span>ホームに戻る</span>
        </Link>
      </div>

      <div className="max-w-[2520px] mx-auto px-8 sm:px-12 md:px-16 py-8 w-full">
        <h1 className="text-2xl font-bold mb-6">マイページ</h1>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">プロフィール</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div className="font-medium">ユーザーID</div>
              <div>{user.userId}</div>
            </div>

            <div className="flex items-center justify-between py-2 border-b">
              <div className="font-medium">表示名</div>
              {editingField === "displayName" ? (
                <div className="flex items-center gap-2">
                  <Input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="max-w-[200px]"
                    placeholder="表示名を入力"
                    autoFocus
                  />
                  <Button size="icon" variant="ghost" onClick={() => saveEdit("displayName")}>
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={cancelEditing}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>{user.displayName || "未設定"}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => startEditing("displayName", user.displayName || "")}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between py-2 border-b">
              <div className="font-medium">メールアドレス</div>
              {editingField === "email" ? (
                <div className="flex items-center gap-2">
                  <Input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="max-w-[200px]"
                    placeholder="メールアドレスを入力"
                    type="email"
                    autoFocus
                  />
                  <Button size="icon" variant="ghost" onClick={() => saveEdit("email")}>
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={cancelEditing}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>{user.email || "未設定"}</span>
                  <Button size="icon" variant="ghost" onClick={() => startEditing("email", user.email || "")}>
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">お気に入り</h2>
          <Link href="/favorites" className="text-primary hover:underline">
            すべて見る
          </Link>
        </div>

        {favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {favoriteProperties.map((property) => (
              <PropertyCard key={property.itemCode} property={property} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-gray-500">お気に入りに追加された物件はありません</p>
            <Link href="/" className="text-primary hover:underline block mt-2">
              物件を探す
            </Link>
          </div>
        )}

        {/* アカウント削除セクション - お気に入りの下部に移動 */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-red-600 mb-4">アカウント設定</h2>
          <div className="border-t pt-4">
            <h3 className="text-lg font-medium text-red-600 mb-2">危険な操作</h3>
            <p className="text-sm text-gray-500 mb-4">
              アカウントを削除すると、すべてのデータが完全に削除され、復元できなくなります。
            </p>
            <Button variant="destructive" onClick={() => setShowDeleteDialog(true)} className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              アカウントを削除
            </Button>
          </div>
        </div>
      </div>

      {/* アカウント削除確認ダイアログ */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              アカウント削除の確認
            </DialogTitle>
            <DialogDescription>
              本当にアカウントを削除しますか？この操作は取り消せません。 すべてのデータが完全に削除されます。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              キャンセル
            </Button>
            <Button variant="destructive" onClick={handleDeleteAccount}>
              アカウントを削除する
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
