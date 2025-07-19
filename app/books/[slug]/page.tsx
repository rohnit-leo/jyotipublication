import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BookDetailPageClient from "./BookDetailPageClient"
import { booksData, getBookBySlug } from "@/lib/books-data"

interface BookPageProps {
  params: {
    slug: string
  }
}

// This function generates the metadata for each book page
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

// This function tells Next.js which dynamic routes to pre-render at build time
export async function generateStaticParams() {
  // Generate params for all books
  return booksData.map((book) => ({
    slug: book.slug,
  }))
}

// The main page component
export default function BookDetailPage({ params }: BookPageProps) {
  // Fetch the book data on the server side
  const book = getBookBySlug(params.slug)

  if (!book) {
    notFound()
  }

  // Pass the book data as props to the client component
  return <BookDetailPageClient book={book} />
}

// Force static generation
export const dynamic = "force-static"
export const revalidate = false
