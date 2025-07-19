import { notFound } from "next/navigation"
import { getComboBySlug, getAllCombos } from "@/lib/combo-data"
import ComboDetailPageClient from "./ComboDetailPageClient"
import { generateComboMetadata } from "./metadata"

export const dynamic = "force-static"

export async function generateStaticParams() {
  const combos = getAllCombos()
  return combos.map((combo) => ({
    slug: combo.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return generateComboMetadata(params.slug)
}

interface ComboPageProps {
  params: {
    slug: string
  }
}

export default function ComboPage({ params }: ComboPageProps) {
  const combo = getComboBySlug(params.slug)

  if (!combo) {
    notFound()
  }

  return <ComboDetailPageClient combo={combo} />
}
