"use client"

import { useState, useEffect } from "react"

export function useScroll(threshold = 10) {
  const [scrolled, setScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // スクロール方向の検出
      if (currentScrollY > lastScrollY + threshold) {
        setScrollDirection("down")
      } else if (currentScrollY < lastScrollY - threshold) {
        setScrollDirection("up")
      }

      // スクロール位置の検出
      if (currentScrollY > threshold) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, threshold])

  return { scrolled, scrollDirection, lastScrollY }
}
