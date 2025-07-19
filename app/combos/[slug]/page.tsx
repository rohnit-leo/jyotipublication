import { generateMetadata } from "./metadata"
import ComboDetailPageClient from "./ComboDetailPageClient"
import { combosData } from "@/lib/combo-data"

interface ComboPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return combosData.map((combo) => ({
    slug: combo.slug,
  }))
}

export { generateMetadata }

export default function ComboDetailPage({ params }: ComboPageProps) {
  return <ComboDetailPageClient params={params} />
}
