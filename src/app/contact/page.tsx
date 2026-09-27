import Link from "next/link";

const contactDetails = [
  { label: "WhatsApp", value: "+94 70 000 0000", href: "https://wa.me/94700000000" },
  { label: "Email", value: "info@bridalprasadini.com", href: "mailto:info@bridalprasadini.com" },
  { label: "TikTok", value: "@bridalprasadini", href: "https://www.tiktok.com/@bridalprasadini" },
  { label: "Facebook", value: "Bridal Prasadini", href: "https://www.facebook.com/profile.php?id=100027352256297" },
];

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#FAF8F5" }}>
      {/* Hero */}
      <div className="pt-32 pb-20 text-center" style={{ backgroundColor: "#2D2D2D" }}>
        <div className="container-luxury">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
              Get In Touch
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
          </div>
          <h1 className="font-normal" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#FAF8F5" }}>
            Contact Us
          </h1>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-normal mb-8" style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}>
                Let's Connect
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ fontFamily: "var(--font-manrope)", color: "#666", fontWeight: 300 }}>
                Whether you're planning your wedding, booking a consultation, or inquiring about our academy — we'd love to hear from you.
              </p>

              <div className="space-y-6 mb-10">
                {contactDetails.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-20 text-xs tracking-widest uppercase pt-0.5 flex-shrink-0" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
                      {c.label}
                    </div>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-300 hover:text-[#C6A56B]"
                      style={{ fontFamily: "var(--font-manrope)", color: "#2D2D2D" }}
                    >
                      {c.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="p-6" style={{ backgroundColor: "#F2E6D8" }}>
                <h3 className="text-sm tracking-[0.15em] uppercase mb-4" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 7:00 PM" },
                    { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
                    { day: "Sunday", hours: "By appointment only" },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
                      <span style={{ color: "#666" }}>{h.day}</span>
                      <span style={{ color: "#2D2D2D", fontWeight: 500 }}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder + CTA */}
            <div>
              {/* Google Map embed placeholder */}
              <div
                className="w-full h-64 mb-8 flex items-center justify-center text-sm"
                style={{ backgroundColor: "#E8D5C0", color: "#999", fontFamily: "var(--font-inter)" }}
              >
                Google Map — Add API key to embed
              </div>

              <div className="p-8 text-center" style={{ border: "1px solid rgba(198,165,107,0.3)" }}>
                <h3 className="text-2xl font-normal mb-3" style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}>
                  Ready to Begin?
                </h3>
                <p className="text-sm mb-6" style={{ fontFamily: "var(--font-manrope)", color: "#666" }}>
                  Book your free consultation today.
                </p>
                <Link href="/book" className="btn-primary">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
