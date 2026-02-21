export const blogs = [
  {
    slug: "how-to-choose-destination",
    title: "How to Choose the Right Study Destination",
    date: "February 02, 2026",
    category: "Destination Planning",
    readTime: "6 min read",
    excerpt:
      "A practical framework to compare countries using academic fit, cost, and post-study opportunities.",
    coverImage: "/images/blogs/how-to-choose.jpg",
    intro:
      "Choosing a study destination is not only about rankings. The right decision comes from aligning your long-term career path, budget reality, and visa feasibility in one practical plan.",
    content: [
      "Start by defining your target career and preferred industries. This narrows your destination options quickly.",
      "Calculate total annual cost beyond tuition: living, insurance, transport, and visa-related expenses.",
      "Compare visa timelines and post-study work pathways before finalizing your target country.",
    ],
    takeaways: [
      "Prioritize long-term career alignment over short-term popularity.",
      "Build a complete budget model before shortlisting institutions.",
      "Validate post-study work routes before final destination commitment.",
    ],
  },
  {
    slug: "student-visa-documents-checklist",
    title: "Student Visa Documents Checklist for 2026",
    date: "January 18, 2026",
    category: "Visa Guidance",
    readTime: "5 min read",
    excerpt:
      "Prepare a stronger student visa file by organizing documents in the format admissions officers expect.",
    coverImage: "/images/blogs/visa-checklist.jpg",
    intro:
      "Visa files are often delayed because documents are complete but poorly structured. A strong checklist should group financial, academic, and intent-related evidence in a coherent order.",
    content: [
      "Keep all core documents updated: passport, admission letter, transcripts, and financial statements.",
      "Make sure your SOP explains academic intent, career relevance, and source of funds clearly.",
      "Practice concise interview answers that align with your chosen program, budget plan, and timeline.",
    ],
    takeaways: [
      "Organize documents in embassy-friendly sequence.",
      "Maintain consistency across SOP, interview answers, and finance file.",
      "Review every date and spelling before submission.",
    ],
  },
  {
    slug: "why-early-application-matters",
    title: "Why Early Application Improves Admission Chances",
    date: "December 11, 2025",
    category: "Admissions",
    readTime: "4 min read",
    excerpt:
      "Applying early improves seat availability, scholarship consideration, and time for visa documentation.",
    coverImage: "/images/blogs/early-application.jpg",
    intro:
      "Students who apply late usually have fewer course options and less scholarship visibility. Early application improves flexibility, confidence, and timeline control.",
    content: [
      "Early applications enter review while more seats are still open across popular programs.",
      "Many scholarship rounds close early, so delayed applications often miss funding windows.",
      "Submitting early gives you buffer time for document corrections and interview prep.",
    ],
    takeaways: [
      "Start profile review at least one intake cycle before target month.",
      "Use early submissions to maximize scholarship probability.",
      "Preserve extra time for visa and pre-departure planning.",
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((post) => post.slug === slug);
}
