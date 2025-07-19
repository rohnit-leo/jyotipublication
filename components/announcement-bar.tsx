"use client"

import { useState, useEffect } from "react"

const announcements = [
  "🎉 New Academic Year 2024-25 Combos Now Available - Save Up to ₹200!",
  "📚 Fast WhatsApp Ordering – No Online Payments Needed!",
  "🎓 Trusted by 15,000+ Students Across Northeast India",
  "📞 24/7 WhatsApp Support Available - Get Instant Help!",
  "🚚 Quick Delivery Across All Northeast States",
  "💡 Expert-Curated Educational Content by Experienced Faculty",
  "🔥 Limited Time: Buy 2 Combos Get Extra 10% Off!",
  "⭐ 4.8/5 Rating from 1000+ Happy Students",
]

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-blue-600 text-white py-3 overflow-hidden relative">
      <div className="text-center font-semibold text-sm md:text-base px-4">{announcements[currentIndex]}</div>
    </div>
  )
}
