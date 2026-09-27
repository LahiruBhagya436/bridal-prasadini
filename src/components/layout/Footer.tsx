import Link from "next/link";

const services = [
  "Luxury Bridal Makeup",
  "Hair Styling & Updos",
  "Pre Wedding Glow",
  "Reception Makeup",
  "Bridesmaids Package",
  "Home Service",
  "Beauty Academy",
];

const quickLinks = [
  { label: "About Prasadini", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Real Bride Stories", href: "/gallery#stories" },
  { label: "Academy", href: "/academy" },
  { label: "Blog", href: "/blog" },
  { label: "Book Consultation", href: "/book" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "#", icon: "IG" },
  { label: "TikTok", href: "https://www.tiktok.com/@bridalprasadini", icon: "TT" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100027352256297", icon: "FB" },
  { label: "YouTube", href: "#", icon: "YT" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2D2D2D", color: "#FAF8F5" }}>
      {/* Top CTA strip */}
      <div style={{ backgroundColor: "#C6A56B" }} className="py-6 text-center">
        <p
          className="text-sm tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-inter)", color: "white" }}
        >
          Every Bride Deserves Perfection
        </p>
      </div>

      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
                Bridal
              </p>
              <h2
                className="text-3xl font-normal mb-1"
                style={{ fontFamily: "var(--font-playfair)", color: "#FAF8F5" }}
              >
                Prasadini
              </h2>
              <p className="text-[9px] tracking-[0.25em] uppercase" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                Salons &amp; Academy
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#999", fontFamily: "var(--font-manrope)" }}>
              Sri Lanka's premier luxury bridal makeup artist. Over a decade of transforming brides into their most beautiful selves.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border flex items-center justify-center text-xs transition-all duration-300 hover:border-[#C6A56B] hover:text-[#C6A56B]"
                  style={{ borderColor: "#444", color: "#999", fontFamily: "var(--font-inter)", fontWeight: 600 }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: "#C6A56B", fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors duration-300 hover:text-[#C6A56B]"
                    style={{ color: "#999", fontFamily: "var(--font-manrope)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: "#C6A56B", fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-300 hover:text-[#C6A56B]"
                    style={{ color: "#999", fontFamily: "var(--font-manrope)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: "#C6A56B", fontFamily: "var(--font-inter)", fontWeight: 500 }}
            >
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>WhatsApp</p>
                <a href="https://wa.me/94700000000" className="text-sm hover:text-[#C6A56B] transition-colors" style={{ color: "#999" }}>
                  +94 70 000 0000
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>Email</p>
                <a href="mailto:info@bridalprasadini.com" className="text-sm hover:text-[#C6A56B] transition-colors" style={{ color: "#999" }}>
                  info@bridalprasadini.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>Hours</p>
                <p className="text-sm" style={{ color: "#999" }}>Mon–Sat: 8am – 7pm</p>
                <p className="text-sm" style={{ color: "#999" }}>Sun: By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #3a3a3a" }}>
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>
            © {new Date().getFullYear()} Bridal Prasadini Mallawarachchi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs hover:text-[#C6A56B] transition-colors" style={{ color: "#666" }}>Privacy Policy</Link>
            <Link href="/faq" className="text-xs hover:text-[#C6A56B] transition-colors" style={{ color: "#666" }}>FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
