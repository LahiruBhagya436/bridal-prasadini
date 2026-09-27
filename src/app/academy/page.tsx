import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty Academy",
  description: "Join Prasadini's Beauty Academy — professional makeup artistry courses in Sri Lanka.",
};

const courses = [
  {
    title: "Professional Bridal Makeup",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    price: "LKR 85,000",
    description: "A comprehensive course covering all aspects of bridal makeup — from skin prep to full editorial looks. Includes hands-on practice with real models.",
    topics: ["Skin analysis & prep", "Foundation techniques", "Eye artistry", "Bridal color theory", "Long-lasting techniques", "Client consultation"],
  },
  {
    title: "Hair Styling Mastery",
    duration: "2 Months",
    level: "All Levels",
    price: "LKR 65,000",
    description: "Master the full spectrum of bridal hair styling — from classic updo techniques to modern braids and elegant curls.",
    topics: ["Hair structure & care", "Updo techniques", "Modern bridal styles", "Extensions", "Tools mastery", "Live wedding styling"],
  },
  {
    title: "Full Professional Diploma",
    duration: "6 Months",
    level: "Comprehensive",
    price: "LKR 145,000",
    description: "The complete professional program covering makeup artistry, hair styling, skincare, business setup, and client management. Our flagship course.",
    topics: ["Everything in both courses", "Skincare & facials", "Business setup", "Portfolio building", "Social media marketing", "Certification"],
  },
];

export default function AcademyPage() {
  return (
    <div style={{ backgroundColor: "#FAF8F5" }}>
      {/* Hero */}
      <div className="pt-32 pb-20 text-center" style={{ backgroundColor: "#2D2D2D" }}>
        <div className="container-luxury">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
              Education
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
          </div>
          <h1 className="font-normal mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#FAF8F5" }}>
            Beauty Academy
          </h1>
          <p className="text-lg font-light" style={{ fontFamily: "var(--font-cormorant)", color: "rgba(250,248,245,0.65)", fontStyle: "italic" }}>
            Learn the art of bridal beauty from Sri Lanka's finest
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="py-20">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-normal mb-6" style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}>
            Shape Your Career in Beauty
          </h2>
          <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-manrope)", color: "#666", fontWeight: 300 }}>
            With over a decade of professional experience and 50+ certified graduates, Prasadini's Beauty Academy offers Sri Lanka's most practical, industry-ready makeup and hair styling education. Every lesson is taught by Prasadini personally, with emphasis on real-world bridal scenarios.
          </p>
        </div>
      </div>

      {/* Courses */}
      <div className="pb-20">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div
                key={course.title}
                className="flex flex-col"
                style={{
                  border: i === 2 ? "1px solid #C6A56B" : "1px solid #EEE",
                  backgroundColor: i === 2 ? "#2D2D2D" : "white",
                }}
              >
                {i === 2 && (
                  <div className="px-6 py-2 text-xs tracking-widest uppercase text-center" style={{ backgroundColor: "#C6A56B", color: "white", fontFamily: "var(--font-inter)" }}>
                    Most Popular
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
                      {course.level}
                    </p>
                    <h3
                      className="text-xl font-normal mb-2"
                      style={{ fontFamily: "var(--font-playfair)", color: i === 2 ? "#FAF8F5" : "#2D2D2D" }}
                    >
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                      <span>{course.duration}</span>
                      <span>·</span>
                      <span className="text-base font-normal" style={{ fontFamily: "var(--font-playfair)", color: "#C6A56B" }}>{course.price}</span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-manrope)", color: i === 2 ? "rgba(250,248,245,0.65)" : "#666", fontWeight: 300 }}>
                    {course.description}
                  </p>

                  <ul className="space-y-2 mb-8 flex-1">
                    {course.topics.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm" style={{ fontFamily: "var(--font-manrope)", color: i === 2 ? "rgba(250,248,245,0.7)" : "#888" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#C6A56B" }} />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <Link href="/book" className={i === 2 ? "btn-primary" : "btn-outline"}>
                    Enrol Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
