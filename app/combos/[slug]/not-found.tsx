import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Package, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Combo Not Found</h1>
        <p className="text-gray-600 mb-6">The combo package you're looking for doesn't exist or has been moved.</p>
        <Link href="/combos">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Combos
          </Button>
        </Link>
      </div>
    </div>
  )
}
