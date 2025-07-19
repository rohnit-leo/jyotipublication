export interface Book {
  id: string
  name: string
  category: string
  university: string
  course: string
  author: string
  price: number
  originalPrice: number
  image: string
  shortDescription: string
  longDescription: string
  features: string[]
  rating: number
  reviews: number
  inStock: boolean
  bestseller: boolean
  slug: string
  tableOfContents: string[]
  keyHighlights: string[]
  targetAudience: string[]
  examPattern: string
  syllabusCoverage: string
}

export const booksData: Book[] = [
  {
    id: "bed-banaras-hindu-university",
    name: "B.Ed Entrance Exam Preparation",
    category: "bed",
    university: "Banaras Hindu University",
    course: "B.Ed",
    author: "Jyoti Publication Team",
    price: 299,
    originalPrice: 399,
    image: "/images/books/bed-banaras-hindu-university.png",
    shortDescription:
      "Comprehensive B.Ed entrance exam preparation book specifically designed for Banaras Hindu University. Covers complete syllabus with practice sets and previous year questions.",
    longDescription: `The BHU B.Ed Entrance Exam Preparation book is your ultimate guide to securing admission in one of India's most prestigious universities. This meticulously crafted study material covers every aspect of the BHU B.Ed entrance examination.

📚 **Complete Coverage:**
• Educational Psychology - Child development, learning theories, and cognitive processes
• Teaching Methodology - Modern teaching techniques and classroom management
• General Knowledge - Current affairs, Indian history, and geography
• Reasoning Ability - Logical reasoning, analytical thinking, and problem-solving
• English Language - Grammar, comprehension, and vocabulary building

🎯 **Exam-Focused Approach:**
• 15+ Practice Sets based on actual BHU exam pattern
• 500+ Previous year questions with detailed solutions
• Chapter-wise topic coverage with important formulas and concepts
• Time management strategies and exam tips
• Mock tests with performance analysis

📖 **Special Features:**
• University-specific content tailored for BHU B.Ed exam
• Easy-to-understand explanations with examples
• Quick revision notes for last-minute preparation
• Answer keys with step-by-step solutions
• Updated content as per latest syllabus changes

This book has helped thousands of students crack the BHU B.Ed entrance exam with confidence. The content is prepared by experienced faculty members who understand the exam pattern and requirements thoroughly.`,
    features: [
      "15+ Practice Sets & Model Papers",
      "500+ Previous Year Questions",
      "University-Specific Content",
      "Complete Syllabus Coverage",
      "Quick Revision Notes",
      "Detailed Answer Explanations",
      "Mock Tests with Analysis",
      "Updated Latest Syllabus",
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    bestseller: true,
    slug: "bed-banaras-hindu-university",
    tableOfContents: [
      "Educational Psychology",
      "Teaching Methodology",
      "General Knowledge",
      "Reasoning Ability",
      "English Language",
      "Practice Sets (15 Sets)",
      "Previous Year Papers",
      "Mock Tests",
    ],
    keyHighlights: [
      "Designed specifically for BHU B.Ed entrance exam",
      "90% accuracy rate in question prediction",
      "Comprehensive coverage of all subjects",
      "Expert faculty-prepared content",
    ],
    targetAudience: [
      "B.Ed aspirants targeting BHU admission",
      "Graduates seeking teaching career",
      "Students preparing for education entrance exams",
    ],
    examPattern:
      "Multiple Choice Questions (MCQs) - 150 questions in 2 hours covering Educational Psychology, Teaching Methodology, General Knowledge, Reasoning, and English",
    syllabusCoverage: "100% syllabus coverage as per BHU B.Ed entrance exam pattern with additional practice material",
  },
  {
    id: "mcom-delhi-university",
    name: "M.Com Entrance Exam Special",
    category: "mcom",
    university: "Delhi University",
    course: "M.Com",
    author: "Jyoti Publication Team",
    price: 349,
    originalPrice: 449,
    image: "/images/books/mcom-delhi-university.png",
    shortDescription:
      "Specialized M.Com entrance preparation for Delhi University covering Accounting, Economics, Business Studies, and Statistics with comprehensive practice material.",
    longDescription: `Delhi University M.Com Entrance Exam book is the definitive guide for aspiring commerce postgraduates. This comprehensive study material is specifically designed to help you excel in the highly competitive DU M.Com entrance examination.

📊 **Subject-wise Coverage:**
• Financial Accounting - Advanced accounting principles, financial statements analysis
• Business Economics - Microeconomics, macroeconomics, and Indian economy
• Business Statistics - Statistical methods, data analysis, and interpretation
• Corporate Accounting - Company accounts, financial reporting standards
• Business Studies - Management principles, organizational behavior

🎯 **Exam Strategy:**
• 20+ Practice Sets modeled on actual DU M.Com pattern
• 600+ Multiple Choice Questions with detailed explanations
• Previous 5 years' question papers with solutions
• Subject-wise weightage analysis and important topics
• Time management techniques for competitive exams

📈 **Advanced Features:**
• Case studies and practical applications
• Current business trends and economic updates
• Graphical representations and statistical tables
• Formula sheets and quick reference guides
• Online mock test access (bonus feature)

The book is authored by experienced commerce faculty and industry experts who have deep understanding of Delhi University's examination pattern and academic standards.`,
    features: [
      "20+ Practice Sets",
      "600+ MCQs with Solutions",
      "Previous 5 Years Papers",
      "Subject-wise Analysis",
      "Case Studies Included",
      "Current Affairs Updates",
      "Formula Reference Sheets",
      "Online Mock Tests",
    ],
    rating: 4.5,
    reviews: 203,
    inStock: true,
    bestseller: false,
    slug: "mcom-delhi-university",
    tableOfContents: [
      "Financial Accounting",
      "Business Economics",
      "Business Statistics",
      "Corporate Accounting",
      "Business Studies",
      "Practice Sets (20 Sets)",
      "Previous Year Papers",
      "Current Affairs Section",
    ],
    keyHighlights: [
      "Tailored for Delhi University M.Com entrance",
      "Expert faculty-prepared content",
      "Comprehensive practice material",
      "Updated with latest economic trends",
    ],
    targetAudience: [
      "B.Com graduates seeking M.Com admission",
      "Commerce students targeting DU",
      "Working professionals upgrading qualifications",
    ],
    examPattern:
      "Computer-based test with 100 MCQs in 2 hours covering Accounting, Economics, Statistics, and Business Studies",
    syllabusCoverage: "Complete DU M.Com entrance syllabus with additional practice questions and current affairs",
  },
  {
    id: "med-jamia-mallia-islamia",
    name: "M.Ed Entrance Exam Preparation",
    category: "bed",
    university: "Jamia Mallia Islamia University",
    course: "M.Ed",
    author: "Jyoti Publication Team",
    price: 329,
    originalPrice: 429,
    image: "/images/books/med-jamia-mallia-islamia.png",
    shortDescription:
      "Advanced M.Ed entrance preparation for Jamia Mallia Islamia covering Educational Psychology, Research Methodology, and Pedagogy with research-oriented content.",
    longDescription: `Jamia Mallia Islamia M.Ed Entrance Exam book is designed for education professionals seeking advanced qualifications. This comprehensive guide covers all aspects of the competitive M.Ed entrance examination with research-oriented approach.

🎓 **Advanced Education Topics:**
• Educational Psychology - Advanced learning theories, developmental psychology
• Educational Research Methodology - Quantitative and qualitative research methods
• Curriculum and Pedagogy - Modern curriculum design and teaching strategies
• Educational Technology - Digital learning tools and e-learning platforms
• Educational Administration - School management and educational leadership

🔬 **Research Focus:**
• Research methodology and statistical analysis
• Educational measurement and evaluation techniques
• Action research and case study methods
• Data collection and interpretation skills
• Thesis writing and research proposal preparation

📚 **Comprehensive Content:**
• 12+ Practice Sets based on Jamia entrance pattern
• 400+ Research-based questions with detailed analysis
• Contemporary educational issues and policies
• International education systems comparison
• Educational philosophy and theoretical frameworks

This book is perfect for B.Ed graduates, practicing teachers, and education professionals who want to pursue advanced studies in education at Jamia Mallia Islamia University.`,
    features: [
      "12+ Research-Based Practice Sets",
      "400+ Advanced Level Questions",
      "Educational Research Methods",
      "Contemporary Issues Coverage",
      "Statistical Analysis Techniques",
      "Thesis Writing Guidelines",
      "Educational Policy Updates",
      "International Perspectives",
    ],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    bestseller: false,
    slug: "med-jamia-mallia-islamia",
    tableOfContents: [
      "Educational Psychology",
      "Research Methodology",
      "Curriculum and Pedagogy",
      "Educational Technology",
      "Educational Administration",
      "Educational Measurement",
      "Practice Sets (12 Sets)",
      "Research Projects Guide",
    ],
    keyHighlights: [
      "Research-oriented content for M.Ed level",
      "Jamia-specific entrance preparation",
      "Advanced educational concepts",
      "Contemporary educational issues",
    ],
    targetAudience: [
      "B.Ed graduates seeking M.Ed admission",
      "Practicing teachers for career advancement",
      "Education researchers and scholars",
    ],
    examPattern:
      "Written test with 100 questions covering Educational Psychology, Research Methodology, Pedagogy, and Educational Administration",
    syllabusCoverage:
      "Complete M.Ed entrance syllabus with advanced research methodology and contemporary educational practices",
  },
  {
    id: "mtech-birla-institute",
    name: "M.Tech Entrance Exam",
    category: "mca",
    university: "Birla Institute of Technology & Science",
    course: "M.Tech",
    author: "Jyoti Publication Team",
    price: 449,
    originalPrice: 599,
    image: "/images/books/mtech-birla-institute.png",
    shortDescription:
      "Advanced M.Tech entrance preparation for BITS covering Engineering Mathematics, Technical Aptitude, and specialized engineering subjects with industry-relevant content.",
    longDescription: `BITS M.Tech Entrance Exam book is the ultimate preparation guide for one of India's premier technical institutions. This comprehensive study material covers all aspects of the BITS M.Tech entrance examination with industry-relevant content.

⚙️ **Technical Excellence:**
• Engineering Mathematics - Advanced calculus, linear algebra, differential equations
• Computer Science Fundamentals - Data structures, algorithms, programming concepts
• Electronics & Communication - Digital systems, signal processing, communication theory
• Mechanical Engineering - Thermodynamics, fluid mechanics, machine design
• Technical Aptitude - Problem-solving and analytical thinking

💻 **Industry-Relevant Content:**
• Latest technology trends and applications
• Software engineering principles and practices
• Hardware design and embedded systems
• Network protocols and cybersecurity basics
• Project management and technical communication

🎯 **BITS-Specific Preparation:**
• 18+ Practice Sets following exact BITS pattern
• 800+ Technical questions with detailed solutions
• Previous year analysis and trend identification
• Subject-wise weightage and important topics
• Time management strategies for technical exams

The book is prepared by experienced engineers and faculty members who understand the technical depth required for BITS M.Tech entrance examination.`,
    features: [
      "18+ Technical Practice Sets",
      "800+ Engineering Questions",
      "Industry-Relevant Content",
      "Latest Technology Updates",
      "Programming Concepts",
      "Hardware Design Topics",
      "Project Management Skills",
      "Technical Communication",
    ],
    rating: 4.8,
    reviews: 134,
    inStock: true,
    bestseller: true,
    slug: "mtech-birla-institute",
    tableOfContents: [
      "Engineering Mathematics",
      "Computer Science Fundamentals",
      "Electronics & Communication",
      "Mechanical Engineering",
      "Technical Aptitude",
      "Programming Concepts",
      "Practice Sets (18 Sets)",
      "Industry Applications",
    ],
    keyHighlights: [
      "BITS-specific technical content",
      "Industry-experienced authors",
      "Latest technology integration",
      "Comprehensive engineering coverage",
    ],
    targetAudience: [
      "B.Tech graduates seeking M.Tech admission",
      "Working engineers for career advancement",
      "Technical professionals upgrading skills",
    ],
    examPattern:
      "Computer-based test with 150 technical questions in 3 hours covering Mathematics, Technical subjects, and Aptitude",
    syllabusCoverage:
      "Complete BITS M.Tech entrance syllabus with advanced engineering concepts and industry applications",
  },
  {
    id: "mba-symbiosis-international",
    name: "MBA Entrance Exam",
    category: "mba",
    university: "Symbiosis International",
    course: "MBA",
    author: "Jyoti Publication Team",
    price: 399,
    originalPrice: 499,
    image: "/images/books/mba-symbiosis-international.png",
    shortDescription:
      "Comprehensive MBA entrance preparation for Symbiosis covering Quantitative Aptitude, Logical Reasoning, English, and General Knowledge with management case studies.",
    longDescription: `Symbiosis MBA Entrance Exam book is your gateway to one of India's top business schools. This comprehensive guide covers all aspects of the competitive MBA entrance examination with real-world business applications.

💼 **Business Acumen Development:**
• Quantitative Aptitude - Advanced mathematics, data interpretation, statistics
• Logical Reasoning - Critical thinking, analytical reasoning, decision making
• English Language - Business communication, comprehension, vocabulary
• General Knowledge - Current affairs, business awareness, economic trends
• Management Concepts - Basic management principles and case studies

📊 **Strategic Preparation:**
• 25+ Practice Sets modeled on Symbiosis pattern
• 1000+ Questions covering all MBA entrance topics
• Business case studies and real-world scenarios
• Current business trends and market analysis
• Leadership and entrepreneurship concepts

🎯 **Symbiosis-Specific Features:**
• SNAP exam pattern and strategy
• Group discussion and personal interview tips
• Essay writing techniques for management topics
• Time management for competitive exams
• Mock interviews and group activities

This book is designed by MBA faculty and industry experts who understand the requirements of modern business education and Symbiosis's academic standards.`,
    features: [
      "25+ MBA Practice Sets",
      "1000+ Business Questions",
      "Real Business Case Studies",
      "SNAP Exam Strategy",
      "Interview Preparation",
      "Essay Writing Techniques",
      "Current Business Trends",
      "Leadership Concepts",
    ],
    rating: 4.9,
    reviews: 298,
    inStock: true,
    bestseller: true,
    slug: "mba-symbiosis-international",
    tableOfContents: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "English Language",
      "General Knowledge",
      "Management Concepts",
      "Business Case Studies",
      "Practice Sets (25 Sets)",
      "Interview Preparation",
    ],
    keyHighlights: [
      "Symbiosis-specific MBA preparation",
      "Industry expert-prepared content",
      "Real business case studies",
      "Comprehensive interview guidance",
    ],
    targetAudience: [
      "MBA aspirants targeting Symbiosis",
      "Working professionals seeking MBA",
      "Business management enthusiasts",
    ],
    examPattern:
      "SNAP - 150 questions in 2.5 hours covering Quantitative Aptitude, Logical Reasoning, English, and General Knowledge",
    syllabusCoverage: "Complete MBA entrance syllabus with business case studies and management concepts",
  },
  {
    id: "bjmc-delhi-university",
    name: "BJMC Entrance Exam Preparation",
    category: "other",
    university: "Delhi University",
    course: "BJMC",
    author: "Jyoti Publication Team",
    price: 319,
    originalPrice: 419,
    image: "/images/books/bjmc-delhi-university.png",
    shortDescription:
      "Specialized BJMC entrance preparation for Delhi University covering Mass Communication, Media Studies, Current Affairs, and Communication Skills.",
    longDescription: `Delhi University BJMC Entrance Exam book is the comprehensive guide for aspiring journalists and mass communication professionals. This specialized study material covers all aspects of the competitive BJMC entrance examination.

📺 **Media & Communication:**
• Mass Communication Fundamentals - Media theories, communication models
• Journalism Principles - News writing, reporting techniques, media ethics
• Media Studies - Print, electronic, and digital media analysis
• Current Affairs - National and international news, media trends
• Communication Skills - Writing, speaking, and presentation abilities

📰 **Industry-Relevant Content:**
• Media law and ethics in journalism
• Digital journalism and social media impact
• Advertising and public relations basics
• Film studies and documentary making
• Media research and audience analysis

🎯 **DU BJMC Specific:**
• 15+ Practice Sets based on DU BJMC pattern
• 500+ Media and communication questions
• Current affairs updates and media analysis
• Creative writing and essay topics
• Mock interviews for media careers

The book is prepared by experienced journalists, media professionals, and communication experts who understand the evolving media landscape and DU's academic requirements.`,
    features: [
      "15+ Media Practice Sets",
      "500+ Communication Questions",
      "Current Affairs Updates",
      "Media Ethics Coverage",
      "Digital Journalism Topics",
      "Creative Writing Exercises",
      "Industry Case Studies",
      "Career Guidance",
    ],
    rating: 4.4,
    reviews: 98,
    inStock: true,
    bestseller: false,
    slug: "bjmc-delhi-university",
    tableOfContents: [
      "Mass Communication Theory",
      "Journalism Principles",
      "Media Studies",
      "Current Affairs",
      "Communication Skills",
      "Media Law & Ethics",
      "Practice Sets (15 Sets)",
      "Career Guidance",
    ],
    keyHighlights: [
      "DU BJMC-specific preparation",
      "Industry professional authors",
      "Current media trends coverage",
      "Practical journalism skills",
    ],
    targetAudience: ["BJMC aspirants targeting DU", "Journalism and media enthusiasts", "Communication students"],
    examPattern:
      "Written test with 100 questions covering Mass Communication, Current Affairs, English, and General Knowledge",
    syllabusCoverage: "Complete BJMC entrance syllabus with media studies and contemporary journalism practices",
  },
  {
    id: "mca-jawaharlal-nehru-university",
    name: "MCA Entrance Exam Preparation",
    category: "mca",
    university: "Jawaharlal Nehru University",
    course: "MCA",
    author: "Jyoti Publication Team",
    price: 429,
    originalPrice: 549,
    image: "/images/books/mca-jawaharlal-nehru-university.png",
    shortDescription:
      "Advanced MCA entrance preparation for JNU covering Mathematics, Computer Fundamentals, Programming, and Logical Reasoning with hands-on coding examples.",
    longDescription: `JNU MCA Entrance Exam book is the definitive guide for computer science aspirants targeting one of India's most prestigious universities. This comprehensive study material combines theoretical concepts with practical programming skills.

💻 **Computer Science Excellence:**
• Mathematics - Discrete mathematics, calculus, statistics, linear algebra
• Computer Fundamentals - Computer organization, operating systems, networks
• Programming Concepts - C, C++, Java fundamentals with coding examples
• Data Structures - Arrays, linked lists, stacks, queues, trees, graphs
• Algorithms - Sorting, searching, dynamic programming, complexity analysis

🔢 **Mathematical Foundation:**
• Set theory and mathematical logic
• Probability and statistics for computing
• Graph theory and combinatorics
• Number theory and cryptography basics
• Mathematical modeling and optimization

🎯 **JNU-Specific Preparation:**
• 20+ Practice Sets following JNU MCA pattern
• 700+ Programming and mathematics questions
• Coding exercises with step-by-step solutions
• Previous year analysis and important topics
• Algorithm implementation and debugging

This book is authored by computer science faculty and software professionals who understand both academic requirements and industry standards.`,
    features: [
      "20+ Technical Practice Sets",
      "700+ Programming Questions",
      "Hands-on Coding Examples",
      "Algorithm Implementation",
      "Mathematical Problem Solving",
      "Data Structure Visualization",
      "Debugging Techniques",
      "Industry Best Practices",
    ],
    rating: 4.7,
    reviews: 145,
    inStock: true,
    bestseller: true,
    slug: "mca-jawaharlal-nehru-university",
    tableOfContents: [
      "Mathematics for Computing",
      "Computer Fundamentals",
      "Programming Concepts",
      "Data Structures",
      "Algorithms",
      "Logical Reasoning",
      "Practice Sets (20 Sets)",
      "Coding Exercises",
    ],
    keyHighlights: [
      "JNU MCA-specific preparation",
      "Hands-on programming approach",
      "Mathematical foundation building",
      "Industry-relevant content",
    ],
    targetAudience: ["MCA aspirants targeting JNU", "Computer science graduates", "Programming enthusiasts"],
    examPattern:
      "Written test with 100 questions covering Mathematics, Computer Science, Programming, and Logical Reasoning",
    syllabusCoverage:
      "Complete JNU MCA entrance syllabus with advanced programming concepts and mathematical foundations",
  },
  {
    id: "mjmc-delhi-university",
    name: "MJMC Entrance Exam Preparation",
    category: "other",
    university: "Delhi University",
    course: "MJMC",
    author: "Jyoti Publication Team",
    price: 339,
    originalPrice: 439,
    image: "/images/books/mjmc-delhi-university.png",
    shortDescription:
      "Advanced MJMC entrance preparation for Delhi University covering Advanced Mass Communication, Media Research, Digital Journalism, and Contemporary Media Issues.",
    longDescription: `Delhi University MJMC Entrance Exam book is designed for advanced journalism and mass communication studies. This comprehensive guide covers contemporary media practices and research methodologies for postgraduate level studies.

📡 **Advanced Media Studies:**
• Mass Communication Theory - Advanced communication models and theories
• Media Research Methodology - Quantitative and qualitative research methods
• Digital Journalism - Online media, social media journalism, multimedia reporting
• Media Management - Media economics, advertising, and business models
• International Communication - Global media systems and cross-cultural communication

🔍 **Research & Analysis:**
• Media content analysis techniques
• Audience research and survey methods
• Statistical analysis for media research
• Media impact assessment and evaluation
• Thesis writing and research proposal development

📱 **Contemporary Issues:**
• Social media and its impact on journalism
• Fake news and media literacy
• Media convergence and technological changes
• Ethics in digital age journalism
• Media policy and regulation

This book is prepared by senior journalism faculty, media researchers, and industry professionals who understand the evolving landscape of mass communication education.`,
    features: [
      "Advanced Media Theory",
      "Research Methodology",
      "Digital Journalism Focus",
      "Contemporary Issues",
      "Media Analysis Techniques",
      "Thesis Writing Guide",
      "Industry Case Studies",
      "Global Media Perspectives",
    ],
    rating: 4.5,
    reviews: 76,
    inStock: true,
    bestseller: false,
    slug: "mjmc-delhi-university",
    tableOfContents: [
      "Advanced Communication Theory",
      "Media Research Methods",
      "Digital Journalism",
      "Media Management",
      "International Communication",
      "Contemporary Issues",
      "Practice Sets (12 Sets)",
      "Research Projects",
    ],
    keyHighlights: [
      "DU MJMC postgraduate level content",
      "Research-oriented approach",
      "Contemporary media focus",
      "Industry expert insights",
    ],
    targetAudience: ["BJMC graduates seeking MJMC", "Media professionals for advancement", "Journalism researchers"],
    examPattern:
      "Written test with advanced questions on Mass Communication Theory, Research Methods, and Contemporary Media Issues",
    syllabusCoverage: "Complete MJMC entrance syllabus with advanced media studies and research methodology",
  },
  {
    id: "bba-christ-university",
    name: "BBA Christ University Entrance Exam",
    category: "other",
    university: "Christ University",
    course: "BBA",
    author: "Jyoti Publication Team",
    price: 289,
    originalPrice: 389,
    image: "/images/books/bba-christ-university.png",
    shortDescription:
      "Comprehensive BBA entrance preparation for Christ University covering Business Fundamentals, Mathematics, English, and Logical Reasoning with entrepreneurship focus.",
    longDescription: `Christ University BBA Entrance Exam book is your pathway to one of India's leading business education institutions. This comprehensive guide covers all aspects of the competitive BBA entrance examination with a focus on business fundamentals and entrepreneurship.

💼 **Business Foundation:**
• Business Studies - Introduction to business, entrepreneurship, business environment
• Mathematics & Statistics - Business mathematics, data interpretation, basic statistics
• English Language - Business communication, comprehension, grammar
• Logical Reasoning - Analytical thinking, problem-solving, decision making
• General Knowledge - Current affairs, business awareness, economic trends

🚀 **Entrepreneurship Focus:**
• Start-up ecosystem and innovation
• Business plan development basics
• Marketing and sales fundamentals
• Financial literacy and basic accounting
• Leadership and team management skills

🎯 **Christ University Specific:**
• 15+ Practice Sets based on Christ University pattern
• 600+ Questions covering all BBA entrance topics
• Business case studies and real-world examples
• Current business trends and market analysis
• Interview preparation and personality development

The book is designed by business faculty and industry professionals who understand the requirements of modern business education and Christ University's academic excellence.`,
    features: [
      "15+ Business Practice Sets",
      "600+ Comprehensive Questions",
      "Entrepreneurship Content",
      "Business Case Studies",
      "Interview Preparation",
      "Current Market Trends",
      "Financial Literacy",
      "Leadership Skills",
    ],
    rating: 4.3,
    reviews: 112,
    inStock: true,
    bestseller: false,
    slug: "bba-christ-university",
    tableOfContents: [
      "Business Studies",
      "Mathematics & Statistics",
      "English Language",
      "Logical Reasoning",
      "General Knowledge",
      "Entrepreneurship",
      "Practice Sets (15 Sets)",
      "Interview Guide",
    ],
    keyHighlights: [
      "Christ University-specific preparation",
      "Entrepreneurship-focused content",
      "Business fundamentals coverage",
      "Industry-relevant examples",
    ],
    targetAudience: [
      "BBA aspirants targeting Christ University",
      "Business and management enthusiasts",
      "Future entrepreneurs",
    ],
    examPattern:
      "Written test with 120 questions covering English, Mathematics, Logical Reasoning, and General Knowledge",
    syllabusCoverage: "Complete BBA entrance syllabus with business fundamentals and entrepreneurship concepts",
  },
  {
    id: "btech-tezpur-university",
    name: "B.Tech Tezpur University Entrance Exam",
    category: "other",
    university: "Tezpur University",
    course: "B.Tech",
    author: "Jyoti Publication Team",
    price: 359,
    originalPrice: 459,
    image: "/images/books/btech-tezpur-university.png",
    shortDescription:
      "Complete B.Tech entrance preparation for Tezpur University covering Physics, Chemistry, Mathematics, and English with regional focus and practical applications.",
    longDescription: `Tezpur University B.Tech Entrance Exam book is specifically designed for engineering aspirants targeting this premier institution in Northeast India. This comprehensive study material covers all fundamental subjects with practical applications and regional relevance.

⚗️ **Science Foundation:**
• Physics - Mechanics, thermodynamics, optics, electricity, and magnetism
• Chemistry - Organic, inorganic, and physical chemistry with practical applications
• Mathematics - Calculus, algebra, coordinate geometry, trigonometry, statistics
• English Language - Technical communication, comprehension, grammar

🔬 **Practical Applications:**
• Laboratory experiments and practical knowledge
• Real-world applications of scientific principles
• Environmental science and sustainability
• Technology and innovation in Northeast India
• Engineering applications in daily life

🎯 **Tezpur University Focus:**
• 12+ Practice Sets following Tezpur University pattern
• 500+ Science and mathematics questions
• Previous year analysis and important topics
• Regional case studies and applications
• Career guidance in engineering fields

This book is prepared by experienced science faculty and engineers who understand both academic requirements and practical applications of engineering concepts.`,
    features: [
      "12+ Science Practice Sets",
      "500+ Technical Questions",
      "Practical Applications",
      "Regional Case Studies",
      "Laboratory Experiments",
      "Environmental Focus",
      "Career Guidance",
      "Northeast India Context",
    ],
    rating: 4.4,
    reviews: 87,
    inStock: true,
    bestseller: false,
    slug: "btech-tezpur-university",
    tableOfContents: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "English Language",
      "Practical Applications",
      "Environmental Science",
      "Practice Sets (12 Sets)",
      "Career Guidance",
    ],
    keyHighlights: [
      "Tezpur University-specific content",
      "Regional relevance and applications",
      "Practical science approach",
      "Environmental sustainability focus",
    ],
    targetAudience: [
      "B.Tech aspirants targeting Tezpur University",
      "Science students in Northeast India",
      "Engineering career seekers",
    ],
    examPattern: "Written test with 100 questions covering Physics, Chemistry, Mathematics, and English",
    syllabusCoverage: "Complete B.Tech entrance syllabus with practical applications and regional case studies",
  },
  {
    id: "bpharm-panjab-university",
    name: "B.Pharm Entrance Exam Preparation",
    category: "other",
    university: "Panjab University",
    course: "B.Pharm",
    author: "Jyoti Publication Team",
    price: 379,
    originalPrice: 479,
    image: "/images/books/bpharm-panjab-university.png",
    shortDescription:
      "Comprehensive B.Pharm entrance preparation for Panjab University covering Physics, Chemistry, Biology, and Mathematics with pharmaceutical applications.",
    longDescription: `Panjab University B.Pharm Entrance Exam book is the complete guide for pharmacy aspirants. This comprehensive study material covers all fundamental subjects with specific focus on pharmaceutical sciences and drug development.

💊 **Pharmaceutical Sciences:**
• Physics - Mechanics, optics, thermodynamics with pharmaceutical applications
• Chemistry - Organic, inorganic, physical chemistry, medicinal chemistry basics
• Biology - Human anatomy, physiology, microbiology, pharmacology fundamentals
• Mathematics - Statistics, calculus for pharmaceutical calculations

🧬 **Medical Applications:**
• Drug development and pharmaceutical processes
• Human body systems and drug interactions
• Microbiology and pharmaceutical microbiology
• Biochemistry and molecular biology basics
• Pharmaceutical calculations and dosage forms

🎯 **Panjab University Specific:**
• 15+ Practice Sets based on PU B.Pharm pattern
• 600+ Science questions with pharmaceutical focus
• Medical terminology and pharmaceutical vocabulary
• Current trends in pharmaceutical industry
• Career opportunities in pharmacy field

This book is prepared by pharmacy faculty, medical professionals, and pharmaceutical scientists who understand the interdisciplinary nature of pharmacy education.`,
    features: [
      "15+ Pharmacy Practice Sets",
      "600+ Science Questions",
      "Pharmaceutical Applications",
      "Medical Terminology",
      "Drug Development Basics",
      "Industry Trends",
      "Career Guidance",
      "Practical Calculations",
    ],
    rating: 4.5,
    reviews: 92,
    inStock: true,
    bestseller: false,
    slug: "bpharm-panjab-university",
    tableOfContents: [
      "Physics for Pharmacy",
      "Pharmaceutical Chemistry",
      "Biology & Physiology",
      "Mathematics & Statistics",
      "Pharmaceutical Sciences",
      "Medical Applications",
      "Practice Sets (15 Sets)",
      "Career in Pharmacy",
    ],
    keyHighlights: [
      "Panjab University B.Pharm specific",
      "Pharmaceutical applications focus",
      "Medical science integration",
      "Industry-relevant content",
    ],
    targetAudience: ["B.Pharm aspirants targeting PU", "Pharmacy and medical students", "Healthcare career seekers"],
    examPattern:
      "Written test with 100 questions covering Physics, Chemistry, Biology, and Mathematics with pharmaceutical applications",
    syllabusCoverage: "Complete B.Pharm entrance syllabus with pharmaceutical sciences and medical applications",
  },
  {
    id: "mpharm-jamia-millia-islamia",
    name: "M.Pharm Entrance Exam Preparation",
    category: "other",
    university: "Jamia Millia Islamia University",
    course: "M.Pharm",
    author: "Jyoti Publication Team",
    price: 399,
    originalPrice: 519,
    image: "/images/books/mpharm-jamia-millia-islamia.png",
    shortDescription:
      "Advanced M.Pharm entrance preparation for Jamia covering Pharmaceutical Chemistry, Pharmacology, Pharmaceutics, and Clinical Pharmacy with research focus.",
    longDescription: `Jamia Millia Islamia M.Pharm Entrance Exam book is designed for advanced pharmaceutical studies. This comprehensive guide covers specialized pharmaceutical subjects with research methodology and clinical applications.

🔬 **Advanced Pharmaceutical Sciences:**
• Pharmaceutical Chemistry - Medicinal chemistry, drug design, synthesis
• Pharmacology & Toxicology - Drug action, adverse effects, clinical pharmacology
• Pharmaceutics - Drug delivery systems, formulation development
• Pharmacognosy - Natural products, herbal medicines, phytochemistry
• Clinical Pharmacy - Patient care, drug therapy management

🧪 **Research & Development:**
• Pharmaceutical research methodology
• Drug discovery and development process
• Clinical trials and regulatory affairs
• Pharmaceutical analysis and quality control
• Biotechnology in pharmaceutical sciences

🎯 **Jamia M.Pharm Focus:**
• 12+ Advanced practice sets for M.Pharm level
• 500+ Specialized pharmaceutical questions
• Research project guidelines and methodology
• Current pharmaceutical industry trends
• Career opportunities in pharmaceutical research

This book is authored by pharmaceutical scientists, researchers, and industry experts who understand the advanced requirements of M.Pharm education.`,
    features: [
      "12+ Advanced Practice Sets",
      "500+ Specialized Questions",
      "Research Methodology",
      "Clinical Applications",
      "Drug Development Process",
      "Industry Trends",
      "Quality Control Methods",
      "Career Research Guidance",
    ],
    rating: 4.6,
    reviews: 78,
    inStock: true,
    bestseller: false,
    slug: "mpharm-jamia-millia-islamia",
    tableOfContents: [
      "Pharmaceutical Chemistry",
      "Pharmacology & Toxicology",
      "Pharmaceutics",
      "Pharmacognosy",
      "Clinical Pharmacy",
      "Research Methodology",
      "Practice Sets (12 Sets)",
      "Research Projects",
    ],
    keyHighlights: [
      "Jamia M.Pharm specific preparation",
      "Advanced pharmaceutical concepts",
      "Research-oriented approach",
      "Clinical pharmacy focus",
    ],
    targetAudience: [
      "B.Pharm graduates seeking M.Pharm",
      "Pharmaceutical researchers",
      "Clinical pharmacy professionals",
    ],
    examPattern: "Advanced written test covering specialized pharmaceutical subjects with research methodology",
    syllabusCoverage: "Complete M.Pharm entrance syllabus with advanced pharmaceutical sciences and research methods",
  },
  {
    id: "ma-gauhati-university",
    name: "MA Entrance Exam Preparation",
    category: "other",
    university: "Gauhati University",
    course: "MA",
    author: "Jyoti Publication Team",
    price: 329,
    originalPrice: 429,
    image: "/images/books/ma-gauhati-university.png",
    shortDescription:
      "Comprehensive MA entrance preparation for Gauhati University covering English Literature, Research Methodology, and Regional Studies with Northeast India focus.",
    longDescription: `Gauhati University MA Entrance Exam book is specifically designed for postgraduate arts students in Northeast India. This comprehensive guide covers various MA streams with special emphasis on regional literature and cultural studies.

📚 **Arts & Literature:**
• English Literature - Classical and contemporary literature, literary criticism
• Regional Literature - Assamese literature, Northeast Indian writers
• Research Methodology - Qualitative and quantitative research methods
• Cultural Studies - Northeast Indian culture, anthropology, sociology
• Language Studies - Linguistics, comparative literature, translation studies

🌏 **Regional Focus:**
• Northeast Indian history and culture
• Tribal studies and ethnography
• Regional languages and dialects
• Folk literature and oral traditions
• Contemporary issues in Northeast India

🎯 **Gauhati University Specific:**
• 10+ Practice sets for various MA streams
• 400+ Literature and arts questions
• Regional case studies and examples
• Research project guidelines
• Career opportunities in arts and humanities

This book is prepared by literature faculty, researchers, and cultural experts who understand the rich heritage and academic traditions of Northeast India.`,
    features: [
      "10+ Arts Practice Sets",
      "400+ Literature Questions",
      "Regional Studies Focus",
      "Research Methodology",
      "Cultural Analysis",
      "Northeast India Context",
      "Career Guidance",
      "Multiple MA Streams",
    ],
    rating: 4.4,
    reviews: 105,
    inStock: true,
    bestseller: false,
    slug: "ma-gauhati-university",
    tableOfContents: [
      "English Literature",
      "Regional Literature",
      "Research Methodology",
      "Cultural Studies",
      "Language Studies",
      "Northeast Studies",
      "Practice Sets (10 Sets)",
      "Research Projects",
    ],
    keyHighlights: [
      "Gauhati University MA specific",
      "Northeast India regional focus",
      "Multiple arts streams coverage",
      "Cultural studies emphasis",
    ],
    targetAudience: [
      "BA graduates seeking MA admission",
      "Arts and literature enthusiasts",
      "Regional studies researchers",
    ],
    examPattern:
      "Written test covering Literature, Research Methods, and subject-specific content for various MA streams",
    syllabusCoverage: "Complete MA entrance syllabus with regional literature and cultural studies focus",
  },
  {
    id: "msc-mumbai-university",
    name: "M.Sc Entrance Exam Preparation",
    category: "other",
    university: "Mumbai University",
    course: "M.Sc",
    author: "Jyoti Publication Team",
    price: 369,
    originalPrice: 469,
    image: "/images/books/msc-mumbai-university.png",
    shortDescription:
      "Advanced M.Sc entrance preparation for Mumbai University covering Physics, Chemistry, Mathematics, Biology, and Research Methods with practical applications.",
    longDescription: `Mumbai University M.Sc Entrance Exam book is the comprehensive guide for science postgraduates. This advanced study material covers multiple science streams with research methodology and practical applications.

🔬 **Advanced Sciences:**
• Physics - Quantum mechanics, thermodynamics, electronics, nuclear physics
• Chemistry - Advanced organic, inorganic, physical chemistry, spectroscopy
• Mathematics - Advanced calculus, algebra, statistics, mathematical modeling
• Biology - Cell biology, genetics, ecology, molecular biology, biotechnology
• Research Methods - Scientific methodology, data analysis, experimental design

🧬 **Specialized Streams:**
• Biotechnology and genetic engineering
• Environmental science and sustainability
• Computer science and information technology
• Applied mathematics and statistics
• Materials science and nanotechnology

🎯 **Mumbai University Focus:**
• 15+ Practice sets for various M.Sc streams
• 700+ Advanced science questions
• Laboratory techniques and practical knowledge
• Research project planning and execution
• Career opportunities in science and research

This book is authored by science faculty, researchers, and industry professionals who understand the advanced requirements of postgraduate science education.`,
    features: [
      "15+ Science Practice Sets",
      "700+ Advanced Questions",
      "Multiple Science Streams",
      "Research Methodology",
      "Laboratory Techniques",
      "Practical Applications",
      "Career Guidance",
      "Industry Connections",
    ],
    rating: 4.7,
    reviews: 134,
    inStock: true,
    bestseller: true,
    slug: "msc-mumbai-university",
    tableOfContents: [
      "Advanced Physics",
      "Advanced Chemistry",
      "Advanced Mathematics",
      "Advanced Biology",
      "Research Methods",
      "Specialized Streams",
      "Practice Sets (15 Sets)",
      "Research Projects",
    ],
    keyHighlights: [
      "Mumbai University M.Sc specific",
      "Multiple science streams coverage",
      "Research-oriented approach",
      "Advanced scientific concepts",
    ],
    targetAudience: [
      "B.Sc graduates seeking M.Sc admission",
      "Science researchers and scholars",
      "Industry professionals upgrading",
    ],
    examPattern: "Advanced written test covering specialized science subjects with research methodology",
    syllabusCoverage: "Complete M.Sc entrance syllabus with advanced scientific concepts and research methods",
  },
  {
    id: "llm-lucknow-university",
    name: "LL.M Entrance Exam Preparation",
    category: "other",
    university: "Lucknow University",
    course: "LL.M",
    author: "Jyoti Publication Team",
    price: 349,
    originalPrice: 449,
    image: "/images/books/llm-lucknow-university.png",
    shortDescription:
      "Advanced LL.M entrance preparation for Lucknow University covering Constitutional Law, Criminal Law, Civil Law, and Legal Research with contemporary legal issues.",
    longDescription: `Lucknow University LL.M Entrance Exam book is designed for advanced legal studies. This comprehensive guide covers specialized legal subjects with contemporary legal issues and research methodology.

⚖️ **Advanced Legal Studies:**
• Constitutional Law - Fundamental rights, constitutional amendments, judicial review
• Criminal Law - IPC, CrPC, evidence law, criminal justice system
• Civil Law - Contract law, tort law, property law, family law
• Legal Research - Research methodology, legal writing, case analysis
• Contemporary Issues - Human rights, environmental law, cyber law

📜 **Specialized Areas:**
• International law and human rights
• Corporate law and commercial transactions
• Intellectual property rights
• Environmental and energy law
• Alternative dispute resolution

🎯 **Lucknow University Focus:**
• 12+ Legal practice sets for LL.M level
• 500+ Advanced legal questions
• Case studies and legal precedents
• Research methodology for legal studies
• Career opportunities in legal profession

This book is prepared by legal scholars, practicing lawyers, and law faculty who understand the advanced requirements of postgraduate legal education.`,
    features: [
      "12+ Legal Practice Sets",
      "500+ Advanced Legal Questions",
      "Case Studies Analysis",
      "Legal Research Methods",
      "Contemporary Issues",
      "Specialized Law Areas",
      "Career Guidance",
      "Practical Applications",
    ],
    rating: 4.5,
    reviews: 89,
    inStock: true,
    bestseller: false,
    slug: "llm-lucknow-university",
    tableOfContents: [
      "Constitutional Law",
      "Criminal Law",
      "Civil Law",
      "Legal Research",
      "Contemporary Issues",
      "Specialized Areas",
      "Practice Sets (12 Sets)",
      "Research Projects",
    ],
    keyHighlights: [
      "Lucknow University LL.M specific",
      "Advanced legal concepts",
      "Contemporary legal issues",
      "Research methodology focus",
    ],
    targetAudience: [
      "LL.B graduates seeking LL.M admission",
      "Legal professionals for advancement",
      "Law researchers and scholars",
    ],
    examPattern: "Advanced written test covering specialized legal subjects with case analysis and legal reasoning",
    syllabusCoverage: "Complete LL.M entrance syllabus with advanced legal concepts and contemporary issues",
  },
]

export function getBookBySlug(slug: string): Book | undefined {
  return booksData.find((book) => book.slug === slug)
}

export function getBooksByCategory(category: string): Book[] {
  if (category === "all") return booksData
  return booksData.filter((book) => book.category === category)
}
