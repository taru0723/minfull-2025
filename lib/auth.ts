"use client"

import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface AuthState {
  user: User | null
  isLoggedIn: boolean
  favorites: string[]
  login: (userId: string) => Promise<boolean>
  register: (user: User) => Promise<boolean>
  logout: () => void
  updateUser: (updates: Partial<User>) => void
  toggleFavorite: (itemCode: string) => void
  isFavorite: (itemCode: string) => boolean
  deleteAccount: () => void
}

export interface User {
  userId: string
  displayName?: string
  email?: string
}

// ユーザーデータを保存するためのモックストレージ
const mockUserStorage: Record<string, User> = {}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      favorites: [],

      login: async (userId: string) => {
        // モックログイン処理
        const user = mockUserStorage[userId]
        if (!user) return false

        set({ user, isLoggedIn: true })
        return true
      },

      register: async (user: User) => {
        // ユーザーIDの重複チェック
        if (mockUserStorage[user.userId]) return false

        // 表示名が未設定の場合、ユーザーIDを表示名として設定
        const updatedUser = {
          ...user,
          displayName: user.displayName || user.userId,
        }

        // 新規ユーザー登録
        mockUserStorage[user.userId] = updatedUser
        set({ user: updatedUser, isLoggedIn: true })
        return true
      },

      logout: () => {
        set({ user: null, isLoggedIn: false })
      },

      updateUser: (updates) => {
        const currentUser = get().user
        if (!currentUser) return

        const updatedUser = { ...currentUser, ...updates }
        mockUserStorage[currentUser.userId] = updatedUser
        set({ user: updatedUser })
      },

      toggleFavorite: (itemCode) => {
        const favorites = [...get().favorites]
        const index = favorites.indexOf(itemCode)

        if (index !== -1) {
          favorites.splice(index, 1)
        } else {
          favorites.push(itemCode)
        }

        set({ favorites })
      },

      isFavorite: (itemCode) => {
        return get().favorites.includes(itemCode)
      },

      deleteAccount: () => {
        const currentUser = get().user
        if (!currentUser) return

        // モックストレージからユーザーを削除
        delete mockUserStorage[currentUser.userId]

        // ログアウト状態にする
        set({ user: null, isLoggedIn: false })
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => (typeof window !== "undefined" ? localStorage : (null as any))),
    },
  ),
)
