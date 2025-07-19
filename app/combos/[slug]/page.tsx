import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ComboDetailPageClient from "./ComboDetailPageClient"
import { combosData, getComboBySlug } from "@/lib/combo-data"

interface ComboPageProps {
  params: {
    slug: string
  }
}

// This function generates the metadata for each combo page
export async function generateMetadata({ params }: ComboPageProps): Promise<Metadata> {
  const combo = getComboBySlug(params.slug)

  if (!combo) {
    return {
      title: "Combo Not Found | Jyoti Publication",
    }
  }

  return {
    title: `${combo.name} - Save ₹${combo.savings} | Jyoti Publication`,
    description: combo.shortDescription,
    keywords: `${combo.course}, combo package, ${combo.name}, Jyoti Publication, save money, study package`,
  }
}

// This function tells Next.js which dynamic routes to pre-render at build time
export async function generateStaticParams() {
  // Generate params for all combos
  return combosData.map((combo) => ({
    slug: combo.slug,
  }))
}

// The main page component
export default function ComboDetailPage({ params }: ComboPageProps) {
  // Check if combo exists before rendering
  const combo = getComboBySlug(params.slug)

  if (!combo) {
    notFound()
  }

  return <ComboDetailPageClient params={params} />
}

// Force static generation
export const dynamic = "force-static"
export const revalidate = false
