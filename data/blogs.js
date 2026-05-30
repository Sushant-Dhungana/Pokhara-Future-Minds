export const blogs = [
  {
    slug: "how-to-study-in-korea-from-nepal",
    title: "How to Study in South Korea from Nepal — Complete 2026 Guide",
    date: "May 15, 2026",
    category: "Korea",
    readTime: "8 min read",
    excerpt:
      "A step-by-step guide for Nepali students: Korean language requirements, GKS scholarship, D-2 visa process, and the best universities to target in 2026.",
    coverImage: "/images/blogs/how-to-choose.jpg",
    intro:
      "South Korea has quietly become one of the best study destinations for Nepali students. Affordable tuition, a government scholarship that covers everything, and a booming job market make it hard to ignore. Here's exactly how to make it happen.",
    content: [
      "Start with Korean language preparation. Most Korean universities require TOPIK Level 2 for admission. The good news: TOPIK I (Level 1–2) is achievable in 3–4 months of structured study. At Pokhara Future Minds, we offer TOPIK-aligned Korean language classes from Hangul basics to conversational proficiency.",
      "Research the GKS (Global Korea Scholarship) also known as NIIED. This fully-funded government scholarship covers tuition, a monthly stipend of KRW 900,000–1,000,000, round-trip airfare, and one year of Korean language training. Nepali students are eligible through both the Embassy Track and the University Track.",
      "Shortlist universities by program fit. Top Korean universities for international students include Seoul National University, KAIST, Yonsei, Korea University, and POSTECH. Many offer English-medium programs in engineering, business, and computer science — meaning you can apply even without a TOPIK score.",
      "Prepare your visa documents carefully. The D-2 student visa requires an admission letter, financial proof, a Genuine Student (GS) statement, and a valid passport. Embassy scrutiny for Korean student visas has increased in 2026 — documentation accuracy is critical.",
      "Apply 5–6 months before your target intake. Korean universities have March and September intakes. GKS scholarship deadlines are typically in September–October for the March intake. Starting your Korean language and application preparation now gives you a competitive edge.",
    ],
    takeaways: [
      "TOPIK Level 2 is the key gateway — start Korean language classes at least 4 months before applying.",
      "GKS scholarship is fully funded — do not overlook it if your GPA is above 2.64 on a 4.0 scale.",
      "English-medium programs at Korean universities let you apply without TOPIK.",
      "Work with a consultant who specializes in Korea to avoid D-2 visa documentation errors.",
    ],
  },
  {
    slug: "gks-scholarship-nepal-2026",
    title: "GKS Scholarship 2026 — Complete Guide for Nepali Students",
    date: "April 28, 2026",
    category: "Scholarships",
    readTime: "7 min read",
    excerpt:
      "Everything Nepali students need to know about the Global Korea Scholarship (NIIED) — eligibility, required documents, deadlines, and how to write a winning study plan.",
    coverImage: "/images/blogs/visa-checklist.jpg",
    intro:
      "The Global Korea Scholarship (GKS), administered by NIIED, is one of the most generous scholarships available to Nepali students. It covers 100% of your costs — and thousands of Nepali students are successfully applying every year. Here's how.",
    content: [
      "GKS eligibility for Nepali students: You must be under 40 years old, hold a GPA above 2.64 on a 4.0 scale (or 80% on a percentage scale), and be a citizen of a country with diplomatic ties with Korea (Nepal qualifies). You cannot currently hold Korean citizenship.",
      "What the scholarship covers: Full tuition waiver, a monthly living stipend of KRW 900,000 (undergraduate) or KRW 1,000,000 (graduate), round-trip economy airfare, Korean language training for one year, a settlement allowance, and medical insurance.",
      "Application tracks: Embassy Track (apply through the Korean Embassy in Kathmandu) or University Track (apply directly to your chosen Korean university). The Embassy Track is more competitive but gives you more university options.",
      "Key documents required: Study plan (2,000 words), personal statement (800 words), academic transcripts, English/Korean proficiency certificates, two recommendation letters, and a medical certificate. The study plan is the most critical document — it must align your academic background with your proposed program in Korea.",
      "Timeline for 2026 intake: GKS applications for the March 2027 intake typically open September–October 2026. Start preparing your documents and Korean language proficiency at least 6 months before the deadline.",
    ],
    takeaways: [
      "GKS covers tuition, living expenses, airfare, and Korean language training — one of the most complete scholarships in Asia.",
      "A strong Study Plan (2,000 words) is the deciding factor — generic statements are rejected.",
      "Nepali students with a GPA of 80%+ are competitive for the Embassy Track.",
      "Our consultants help you write a GKS-winning study plan and prepare all required documents.",
    ],
  },
  {
    slug: "ielts-vs-pte-which-is-better-for-nepal-students",
    title: "IELTS vs PTE — Which is Better for Nepali Students in 2026?",
    date: "March 10, 2026",
    category: "IELTS & PTE",
    readTime: "6 min read",
    excerpt:
      "Choosing between IELTS and PTE? Here's an honest comparison for Nepali students based on test format, score acceptance, preparation time, and cost.",
    coverImage: "/images/blogs/early-application.jpg",
    intro:
      "Both IELTS and PTE are accepted by universities in Australia, Canada, UK, and most other countries. But they're very different tests — and the right choice depends on your learning style, target country, and preparation timeline.",
    content: [
      "Format difference: IELTS Academic has a paper-based format with a human examiner for the Speaking test. PTE Academic is entirely computer-based, including speaking tasks recorded by a microphone. Students who struggle with face-to-face speaking often find PTE less stressful.",
      "Scoring: IELTS uses a band score from 0–9 in half-band increments. PTE uses a 10–90 scale with separate scores for each skill. Most Australian and Canadian universities accept IELTS 6.0–6.5 or PTE 50–58 as equivalent.",
      "Acceptance by country: IELTS is universally accepted across all destinations. PTE is accepted in Australia, Canada, UK, and USA — but NOT widely accepted for Korean, Japanese, or European university applications. If you plan to study in Korea, IELTS or TOEFL is required.",
      "Preparation time: Most students see significant improvement with 6–8 weeks of focused preparation for either test. At Pokhara Future Minds, our IELTS and PTE coaching includes mock tests, skill-specific practice, and band/score targeting sessions.",
      "Cost and retakes: IELTS costs approximately NPR 28,000–30,000 per attempt in Nepal. PTE costs approximately NPR 22,000–25,000. PTE results are typically released within 5 business days, while IELTS takes 3–5 days for computer-based tests.",
    ],
    takeaways: [
      "Choose IELTS if you target Korea, Japan, or European universities — PTE is not widely accepted there.",
      "Choose PTE if you prefer computer-based testing and need faster results for Australia or Canada.",
      "Both tests require 6–8 weeks of structured coaching for meaningful score improvement.",
      "Our IELTS and PTE classes in Pokhara include mock tests and personalized feedback every session.",
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((post) => post.slug === slug);
}
