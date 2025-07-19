import { generateMetadata } from "./metadata"
import BookDetailPageClient from "./BookDetailPageClient"
import { booksData } from "@/lib/books-data"

interface BookPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return booksData.map((book) => ({
    slug: book.slug,
  }))
}

export { generateMetadata }

export default function BookDetailPage({ params }: BookPageProps) {
  return <BookDetailPageClient params={params} />
}
