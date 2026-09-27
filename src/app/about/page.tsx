import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Prasadini",
  description: "Meet Prasadini Mallawarachchi — Sri Lanka's premier luxury bridal makeup artist with over a decade of experience.",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#FAF8F5" }}>
      {/* Hero */}
      <div className="pt-32 pb-20 text-center" style={{ backgroundColor: "#2D2D2D" }}>
        <div className="container-luxury">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
              The Artist
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
          </div>
          <h1 className="font-normal" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#FAF8F5" }}>
            About Prasadini
          </h1>
        </div>
      </div>

      {/* Bio section */}
      <div className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=85"
                  alt="Prasadini Mallawarachchi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 -z-10" style={{ border: "1px solid rgba(198,165,107,0.3)" }} />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-normal mb-6" style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}>
                Sri Lanka's Premier <br /><span style={{ color: "#C6A56B" }}>Bridal Makeup Artist</span>
              </h2>

              <div className="space-y-5">
                {[
                  "Prasadini Mallawarachchi began her journey in the world of beauty over a decade ago, with a simple belief: every bride deserves to feel extraordinary on the most important day of her life.",
                  "Her artistry combines classical bridal techniques with modern, editorial aesthetics — creating looks that are flawlessly photographed, deeply personal, and absolutely timeless.",
                  "Having worked with over 500 brides across Sri Lanka and international destinations, Prasadini has developed an unmatched understanding of diverse skin tones, features, and wedding traditions.",
                  "Beyond her individual bridal work, Prasadini founded her Beauty Academy to share her expertise with the next generation of makeup artists, training over 50 graduates who now work professionally across the industry.",
                ].map((para, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ fontFamily: "var(--font-manrope)", color: "#666", fontWeight: 300 }}>
                    {para}
                  </p>
                ))}
              </div>

              <div
                className="text-3xl mt-8 mb-8"
                style={{ fontFamily: "var(--font-cormorant)", color: "#2D2D2D", fontStyle: "italic" }}
              >
                Prasadini Mallawarachchi
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { num: "10+", label: "Years Experience" },
                  { num: "500+", label: "Happy Brides" },
                  { num: "50+", label: "Academy Graduates" },
                  { num: "5★", label: "Average Rating" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-normal" style={{ fontFamily: "var(--font-playfair)", color: "#C6A56B" }}>{s.num}</p>
                    <p className="text-xs tracking-[0.1em] uppercase mt-1" style={{ fontFamily: "var(--font-inter)", color: "#999" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <Link href="/book" className="btn-primary">
                Book with Prasadini
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
