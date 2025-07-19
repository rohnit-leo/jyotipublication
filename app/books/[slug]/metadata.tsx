import type { Metadata } from "next"
import { getBookBySlug } from "@/lib/books-data"

interface BookPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const book = getBookBySlug(params.slug)

  if (!book) {
    return {
      title: "Book Not Found | Jyoti Publication",
    }
  }

  return {
    title: `${book.name} - ${book.university} | Jyoti Publication`,
    description: book.shortDescription,
    keywords: `${book.course}, ${book.university}, entrance exam, ${book.name}, Jyoti Publication`,
  }
}
