import type { Metadata } from "next"
import { getComboBySlug } from "@/lib/combo-data"

interface ComboPageProps {
  params: {
    slug: string
  }
}

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
