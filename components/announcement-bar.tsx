"use client"

import { useState } from "react"
import { X, Megaphone, Gift, Truck } from "lucide-react"

const announcements = [
  {
    id: 1,
    icon: Gift,
    text: "🎉 Special Offer: Get 25% OFF on all combo packages! Limited time offer.",
    bgColor: "bg-gradient-to-r from-red-500 to-pink-500",
  },
  {
    id: 2,
    icon: Truck,
    text: "📦 FREE Delivery across India on orders above ₹500. Order now!",
    bgColor: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
  {
    id: 3,
    icon: Megaphone,
    text: "📚 New Books Added: Latest entrance exam preparation materials now available!",
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-500",
  },
]

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Auto-rotate announcements
  useState(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  })

  if (!isVisible) return null

  const currentAnnouncement = announcements[currentIndex]

  return (
    <div className={`${currentAnnouncement.bgColor} text-white py-2 px-4 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 flex-1">
          <currentAnnouncement.icon className="h-4 w-4 flex-shrink-0 animate-pulse" />
          <div className="overflow-hidden">
            <p className="text-sm font-medium animate-scroll whitespace-nowrap">{currentAnnouncement.text}</p>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex space-x-1 justify-center pb-1">
        {announcements.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
