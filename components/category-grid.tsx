import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Calculator, Monitor } from "lucide-react"
import Link from "next/link"
import { booksData } from "@/lib/books-data"

const getCategoryCount = (categoryId: string) => {
  return booksData.filter((book) => book.category === categoryId).length
}

const categories = [
  {
    id: "bed",
    name: "B.Ed Combo",
    description: "Complete Bachelor of Education study materials",
    icon: GraduationCap,
    color: "bg-blue-500",
    books: `${getCategoryCount("bed")} Books`,
    price: "Combo ₹649",
    href: "/combos?category=bed",
  },
  {
    id: "mba",
    name: "MBA Combo",
    description: "Comprehensive MBA course materials",
    icon: Briefcase,
    color: "bg-purple-500",
    books: `${getCategoryCount("mba")} Books`,
    price: "Combo ₹719",
    href: "/combos?category=mba",
  },
  {
    id: "mcom",
    name: "M.Com Combo",
    description: "Master of Commerce complete package",
    icon: Calculator,
    color: "bg-green-500",
    books: `${getCategoryCount("mcom")} Books`,
    price: "Combo ₹699",
    href: "/combos?category=mcom",
  },
  {
    id: "mca",
    name: "MCA Combo",
    description: "Master of Computer Applications resources",
    icon: Monitor,
    color: "bg-orange-500",
    books: `${getCategoryCount("mca")} Books`,
    price: "Combo ₹749",
    href: "/combos?category=mca",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Choose Your Academic Path</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertly curated book combinations for every major course. Get everything you need in one comprehensive
            package.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Books:</span>
                      <span className="font-medium text-gray-900">{category.books}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-bold text-green-600">{category.price}</span>
                    </div>
                  </div>

                  <Link href={category.href}>
                    <Button className="w-full mt-4 group-hover:bg-gray-900 transition-colors">View Combo</Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
