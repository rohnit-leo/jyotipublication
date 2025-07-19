import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jyoti Publication - Educational Books & Academic Resources | Assam",
  description:
    "Trusted educational publisher in Assam offering comprehensive book combos for B.Ed, MBA, M.Com, MCA courses. Quality academic resources with WhatsApp ordering.",
  keywords:
    "educational books, Assam publisher, B.Ed books, MBA books, M.Com books, MCA books, academic resources, Jyoti Publication",
  authors: [{ name: "Jyoti Publication" }],
  openGraph: {
    title: "Jyoti Publication - Educational Excellence",
    description: "Quality educational books and academic resources from Assam's trusted publisher",
    url: "https://www.jyotipublication.in",
    siteName: "Jyoti Publication",
    locale: "en_IN",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
