export interface ComboBook {
  id: string
  name: string
  type: "foundation" | "course-specific"
  price: number
  pages?: number
}

export interface Combo {
  id: string
  name: string
  category: string
  course: string
  totalBooks: number
  comboPrice: number
  originalPrice: number
  savings: number
  books: ComboBook[]
  image: string
  shortDescription: string
  longDescription: string
  features: string[]
  rating: number
  reviews: number
  bestseller: boolean
  slug: string
}

// Individual books that make up the combos
export const comboBooks: ComboBook[] = [
  // Foundation Books (Common to all combos)
  {
    id: "english-grammar",
    name: "English Grammar",
    type: "foundation",
    price: 149,
    pages: 200,
  },
  {
    id: "gk-one-linear",
    name: "GK One Linear (93 pages)",
    type: "foundation",
    price: 99,
    pages: 93,
  },
  {
    id: "quantitative-aptitude",
    name: "Quantitative Aptitude",
    type: "foundation",
    price: 199,
    pages: 300,
  },

  // Course-Specific Books
  {
    id: "mcom-book",
    name: "M.Com Book",
    type: "course-specific",
    price: 249,
    pages: 400,
  },
  {
    id: "mcom-practice-sets",
    name: "M.Com Practice Sets",
    type: "course-specific",
    price: 149,
    pages: 150,
  },
  {
    id: "bed-book",
    name: "B.Ed Book",
    type: "course-specific",
    price: 229,
    pages: 350,
  },
  {
    id: "bed-practice-sets",
    name: "B.Ed Practice Sets",
    type: "course-specific",
    price: 129,
    pages: 120,
  },
  {
    id: "mca-book",
    name: "MCA Book",
    type: "course-specific",
    price: 279,
    pages: 450,
  },
  {
    id: "mca-practice-set",
    name: "MCA Practice Set",
    type: "course-specific",
    price: 169,
    pages: 180,
  },
  {
    id: "mba-book",
    name: "MBA Book",
    type: "course-specific",
    price: 259,
    pages: 420,
  },
  {
    id: "mba-practice-set",
    name: "MBA Practice Set",
    type: "course-specific",
    price: 159,
    pages: 160,
  },
]

export const combosData: Combo[] = [
  {
    id: "mcom-complete-combo",
    name: "M.Com Complete Combo",
    category: "mcom",
    course: "M.Com",
    totalBooks: 5,
    comboPrice: 699,
    originalPrice: 846, // Sum of individual prices
    savings: 147,
    books: [
      comboBooks.find((b) => b.id === "english-grammar")!,
      comboBooks.find((b) => b.id === "gk-one-linear")!,
      comboBooks.find((b) => b.id === "quantitative-aptitude")!,
      comboBooks.find((b) => b.id === "mcom-book")!,
      comboBooks.find((b) => b.id === "mcom-practice-sets")!,
    ],
    image: "/images/books/mcom-delhi-university.png",
    shortDescription:
      "Complete M.Com preparation package with 5 essential books covering all subjects. Includes foundation books (English, GK, Quantitative Aptitude) plus M.Com specific content and practice sets.",
    longDescription: `M.Com Complete Combo is the ultimate preparation package for Master of Commerce entrance exams and coursework.

📘 What you will get in this combo:
• English Grammar - Complete grammar guide with rules and exercises
• GK One Linear (93 pages) - Comprehensive general knowledge in linear format
• Quantitative Aptitude - Mathematical concepts and problem-solving techniques
• M.Com Book - Subject-specific content for commerce students
• M.Com Practice Sets - Previous year questions and mock tests

🎯 Perfect for:
- M.Com entrance exam preparation
- University coursework support
- Comprehensive commerce education
- Self-study and revision

This combo saves you ₹147 compared to buying books individually. Everything you need for M.Com success in one package!`,
    features: [
      "5 Complete Books",
      "Foundation + Course-Specific Content",
      "Practice Sets Included",
      "Save ₹147 on Individual Purchase",
      "1000+ Pages of Content",
      "Covers All M.Com Subjects",
    ],
    rating: 4.6,
    reviews: 234,
    bestseller: true,
    slug: "mcom-complete-combo",
  },
  {
    id: "bed-complete-combo",
    name: "B.Ed Complete Combo",
    category: "bed",
    course: "B.Ed",
    totalBooks: 5,
    comboPrice: 649,
    originalPrice: 776,
    savings: 127,
    books: [
      comboBooks.find((b) => b.id === "english-grammar")!,
      comboBooks.find((b) => b.id === "gk-one-linear")!,
      comboBooks.find((b) => b.id === "quantitative-aptitude")!,
      comboBooks.find((b) => b.id === "bed-book")!,
      comboBooks.find((b) => b.id === "bed-practice-sets")!,
    ],
    image: "/images/books/bed-banaras-hindu-university.png",
    shortDescription:
      "Complete B.Ed preparation package with 5 essential books covering all subjects. Includes foundation books (English, GK, Quantitative Aptitude) plus B.Ed specific content and practice sets.",
    longDescription: `B.Ed Complete Combo is the ultimate preparation package for Bachelor of Education entrance exams and coursework.

📘 What you will get in this combo:
• English Grammar - Complete grammar guide with rules and exercises
• GK One Linear (93 pages) - Comprehensive general knowledge in linear format  
• Quantitative Aptitude - Mathematical concepts and problem-solving techniques
• B.Ed Book - Educational psychology, teaching methodology, and pedagogy
• B.Ed Practice Sets - Previous year questions and mock tests

🎯 Perfect for:
- B.Ed entrance exam preparation
- Teaching methodology understanding
- Educational psychology concepts
- Self-study and revision

This combo saves you ₹127 compared to buying books individually. Everything you need for B.Ed success in one package!`,
    features: [
      "5 Complete Books",
      "Foundation + Course-Specific Content",
      "Practice Sets Included",
      "Save ₹127 on Individual Purchase",
      "950+ Pages of Content",
      "Covers All B.Ed Subjects",
    ],
    rating: 4.7,
    reviews: 189,
    bestseller: true,
    slug: "bed-complete-combo",
  },
  {
    id: "mca-complete-combo",
    name: "MCA Complete Combo",
    category: "mca",
    course: "MCA",
    totalBooks: 5,
    comboPrice: 749,
    originalPrice: 896,
    savings: 147,
    books: [
      comboBooks.find((b) => b.id === "english-grammar")!,
      comboBooks.find((b) => b.id === "gk-one-linear")!,
      comboBooks.find((b) => b.id === "quantitative-aptitude")!,
      comboBooks.find((b) => b.id === "mca-book")!,
      comboBooks.find((b) => b.id === "mca-practice-set")!,
    ],
    image: "/images/books/mca-jawaharlal-nehru-university.png",
    shortDescription:
      "Complete MCA preparation package with 5 essential books covering all subjects. Includes foundation books (English, GK, Quantitative Aptitude) plus MCA specific content and practice sets.",
    longDescription: `MCA Complete Combo is the ultimate preparation package for Master of Computer Applications entrance exams and coursework.

📘 What you will get in this combo:
• English Grammar - Complete grammar guide with rules and exercises
• GK One Linear (93 pages) - Comprehensive general knowledge in linear format
• Quantitative Aptitude - Mathematical concepts and problem-solving techniques  
• MCA Book - Computer science fundamentals, programming concepts, and algorithms
• MCA Practice Set - Previous year questions and technical mock tests

🎯 Perfect for:
- MCA entrance exam preparation
- Computer science foundation building
- Programming concept understanding
- Technical aptitude development

This combo saves you ₹147 compared to buying books individually. Everything you need for MCA success in one package!`,
    features: [
      "5 Complete Books",
      "Foundation + Technical Content",
      "Practice Sets Included",
      "Save ₹147 on Individual Purchase",
      "1100+ Pages of Content",
      "Covers All MCA Subjects",
    ],
    rating: 4.8,
    reviews: 156,
    bestseller: true,
    slug: "mca-complete-combo",
  },
  {
    id: "mba-complete-combo",
    name: "MBA Complete Combo",
    category: "mba",
    course: "MBA",
    totalBooks: 5,
    comboPrice: 719,
    originalPrice: 866,
    savings: 147,
    books: [
      comboBooks.find((b) => b.id === "english-grammar")!,
      comboBooks.find((b) => b.id === "gk-one-linear")!,
      comboBooks.find((b) => b.id === "quantitative-aptitude")!,
      comboBooks.find((b) => b.id === "mba-book")!,
      comboBooks.find((b) => b.id === "mba-practice-set")!,
    ],
    image: "/images/books/mba-symbiosis-international.png",
    shortDescription:
      "Complete MBA preparation package with 5 essential books covering all subjects. Includes foundation books (English, GK, Quantitative Aptitude) plus MBA specific content and practice sets.",
    longDescription: `MBA Complete Combo is the ultimate preparation package for Master of Business Administration entrance exams and coursework.

📘 What you will get in this combo:
• English Grammar - Complete grammar guide with rules and exercises
• GK One Linear (93 pages) - Comprehensive general knowledge in linear format
• Quantitative Aptitude - Mathematical concepts and problem-solving techniques
• MBA Book - Management concepts, business studies, and case studies
• MBA Practice Set - Previous year questions and management mock tests

🎯 Perfect for:
- MBA entrance exam preparation (CAT, MAT, XAT, etc.)
- Management concept understanding
- Business aptitude development
- Leadership and strategy learning

This combo saves you ₹147 compared to buying books individually. Everything you need for MBA success in one package!`,
    features: [
      "5 Complete Books",
      "Foundation + Management Content",
      "Practice Sets Included",
      "Save ₹147 on Individual Purchase",
      "1050+ Pages of Content",
      "Covers All MBA Subjects",
    ],
    rating: 4.9,
    reviews: 298,
    bestseller: true,
    slug: "mba-complete-combo",
  },
]

export function getComboBySlug(slug: string): Combo | undefined {
  return combosData.find((combo) => combo.slug === slug)
}

export function getCombosByCategory(category: string): Combo[] {
  if (category === "all") return combosData
  return combosData.filter((combo) => combo.category === category)
}
