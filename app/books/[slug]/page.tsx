import { notFound } from "next/navigation"
import { getBookBySlug, getAllBooks } from "@/lib/books-data"
import BookDetailPageClient from "./BookDetailPageClient"
import { generateBookMetadata } from "./metadata"

export const dynamic = "force-static"

export async function generateStaticParams() {
  const books = getAllBooks()
  return books.map((book) => ({
    slug: book.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return generateBookMetadata(params.slug)
}

interface BookPageProps {
  params: {
    slug: string
  }
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBookBySlug(params.slug)

  if (!book) {
    notFound()
  }

  return <BookDetailPageClient book={book} />
}
