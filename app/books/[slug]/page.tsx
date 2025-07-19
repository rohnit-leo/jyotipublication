import { generateMetadata } from "./metadata"
import BookDetailPageClient from "./BookDetailPageClient"
import { booksData } from "@/lib/books-data"
import { notFound } from "next/navigation"

interface BookPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all book slugs at build time
export async function generateStaticParams() {
  return booksData.map((book) => ({
    slug: book.slug,
  }))
}

export { generateMetadata }

export default function BookDetailPage({ params }: BookPageProps) {
  // Verify the book exists before rendering
  const book = booksData.find((book) => book.slug === params.slug)

  if (!book) {
    notFound()
  }

  return <BookDetailPageClient params={params} />
}
