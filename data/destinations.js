export const destinations = [
  {
    slug: "australia",
    name: "Australia",
    intro:
      "Top-ranked universities, practical learning, and strong post-study work opportunities.",
    highlights: [
      "Globally recognized institutions across major cities.",
      "Career-focused programs with industry placements.",
      "Student-friendly lifestyle with multicultural support.",
    ],
    image: "/images/hero.jpg",
    tuitionRange: "AUD 22,000 - 45,000/year",
    intakes: "February, July, November",
    workPathway: "Temporary Graduate Visa pathways after graduation.",
    popularPrograms: ["Information Technology", "Nursing", "Business Analytics"],
    requirements: [
      "Academic transcripts and certificate documents.",
      "English proficiency score (IELTS/PTE equivalent).",
      "Financial evidence and genuine student statement.",
    ],
    bestCities: ["Sydney", "Melbourne", "Brisbane", "Adelaide"],
  },
  {
    slug: "canada",
    name: "Canada",
    intro:
      "High-quality education system with safe communities and clear student pathways.",
    highlights: [
      "Affordable diploma and degree options.",
      "Post-graduation work pathway opportunities.",
      "Popular destination for STEM and business tracks.",
    ],
    image: "/images/about.jpg",
    tuitionRange: "CAD 16,000 - 38,000/year",
    intakes: "January, May, September",
    workPathway: "Post-Graduation Work Permit eligibility for many programs.",
    popularPrograms: ["Project Management", "Computer Science", "Hospitality"],
    requirements: [
      "Offer letter from eligible institution.",
      "Proof of funds and tuition payment proof.",
      "Statement of purpose aligned with study goals.",
    ],
    bestCities: ["Toronto", "Vancouver", "Calgary", "Ottawa"],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    intro:
      "Shorter degree durations, historic campuses, and globally respected qualifications.",
    highlights: [
      "One-year master programs in many fields.",
      "Strong academic reputation and research culture.",
      "Excellent choices for business and healthcare studies.",
    ],
    image: "/images/process/step2.jpg",
    tuitionRange: "GBP 14,000 - 32,000/year",
    intakes: "January, September",
    workPathway: "Graduate Route options after eligible degree completion.",
    popularPrograms: ["MBA", "Public Health", "Data Science"],
    requirements: [
      "CAS letter and acceptable academic profile.",
      "English language requirement fulfillment.",
      "Financial maintenance and visa form compliance.",
    ],
    bestCities: ["London", "Manchester", "Birmingham", "Leeds"],
  },
  {
    slug: "usa",
    name: "United States",
    intro:
      "Flexible curriculum, broad university options, and high employability value worldwide.",
    highlights: [
      "Extensive range of majors and research opportunities.",
      "Transfer-friendly and flexible credit systems.",
      "Strong global recognition of U.S. degrees.",
    ],
    image: "/images/process/step3.jpg",
    tuitionRange: "USD 20,000 - 55,000/year",
    intakes: "Spring, Fall",
    workPathway: "OPT and STEM extension opportunities for eligible students.",
    popularPrograms: ["Computer Engineering", "Finance", "Public Policy"],
    requirements: [
      "Standardized test requirements as per university.",
      "I-20 issuance and financial documentation.",
      "Clear academic intent for visa interview.",
    ],
    bestCities: ["Boston", "New York", "Chicago", "Austin"],
  },
  {
    slug: "korea",
    name: "South Korea",
    intro:
      "Innovation-driven education, modern campuses, and rising global academic recognition.",
    highlights: [
      "Emerging English-medium degree options.",
      "Excellent technology and engineering ecosystems.",
      "Competitive tuition with scholarship potential.",
    ],
    image: "/images/process/step4.jpg",
    tuitionRange: "KRW 4,000,000 - 12,000,000/semester",
    intakes: "March, September",
    workPathway: "Part-time study permits and post-graduation job pathways.",
    popularPrograms: ["Engineering", "AI & Robotics", "Media Studies"],
    requirements: [
      "Academic profile and language readiness plan.",
      "Admission and tuition documentation.",
      "Embassy-compliant financial proof.",
    ],
    bestCities: ["Seoul", "Daejeon", "Busan", "Daegu"],
  },
  {
    slug: "japan",
    name: "Japan",
    intro:
      "Advanced research ecosystem, world-class technology, and strong international programs.",
    highlights: [
      "High-value programs in science and innovation.",
      "Scholarship options for international students.",
      "Unique culture with safe and organized cities.",
    ],
    image: "/images/about-thumb.jpg",
    tuitionRange: "JPY 600,000 - 1,800,000/year",
    intakes: "April, October",
    workPathway: "Industry-aligned work opportunities for specialized fields.",
    popularPrograms: ["Automotive Engineering", "Robotics", "International Business"],
    requirements: [
      "Academic transcripts and language pathway.",
      "COE process and sponsor documentation.",
      "Proof of funds and purpose clarity.",
    ],
    bestCities: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
  },
];

export function getDestinationBySlug(slug) {
  return destinations.find((item) => item.slug === slug);
}
