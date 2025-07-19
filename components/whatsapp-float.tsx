"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = "Hi! I need help with book selection and ordering."
    window.open(`https://wa.me/919914632817?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-lg animate-bounce"
        size="lg"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
      <div className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
        Chat with us!
      </div>
    </div>
  )
}
