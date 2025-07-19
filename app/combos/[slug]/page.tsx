import { generateMetadata } from "./metadata"
import ComboDetailPageClient from "./ComboDetailPageClient"
import { combosData } from "@/lib/combo-data"
import { notFound } from "next/navigation"

interface ComboPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all combo slugs at build time
export async function generateStaticParams() {
  return combosData.map((combo) => ({
    slug: combo.slug,
  }))
}

export { generateMetadata }

export default function ComboDetailPage({ params }: ComboPageProps) {
  // Verify the combo exists before rendering
  const combo = combosData.find((combo) => combo.slug === params.slug)

  if (!combo) {
    notFound()
  }

  return <ComboDetailPageClient params={params} />
}
