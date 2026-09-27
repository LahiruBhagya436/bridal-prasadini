import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Luxury bridal makeup, hair styling, pre-wedding glow, home service, and academy by Prasadini Mallawarachchi.",
};

const services = [
  {
    id: "bridal-makeup",
    title: "Luxury Bridal Makeup",
    price: "Starting from LKR 25,000",
    description: "Our signature bridal makeup service begins with a thorough skin consultation, followed by expert foundation matching and a curated look that enhances your natural beauty. Includes pre-wedding trial session.",
    includes: ["Skin prep & primer", "Full face makeup", "Lip work", "Trial session", "Touch-up kit"],
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&q=80",
  },
  {
    id: "hair",
    title: "Hair Styling & Updos",
    price: "Starting from LKR 15,000",
    description: "Elegant bridal hair styling from classic updos to modern braids and flowing curls. We work with your hair type and dress style to create a cohesive, stunning look.",
    includes: ["Hair consultation", "Wash & treatment", "Styling", "Accessories placement", "Touch-up service"],
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
  },
  {
    id: "prewedding",
    title: "Pre Wedding Glow",
    price: "Starting from LKR 18,000",
    description: "A series of pampering sessions starting weeks before your wedding to prepare your skin, enhance your natural glow, and ensure you're at your absolute best on the big day.",
    includes: ["Skin analysis", "Facials (3 sessions)", "Eyebrow shaping", "Body scrub", "Glow treatment"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
  {
    id: "engagement",
    title: "Engagement Makeup",
    price: "Starting from LKR 18,000",
    description: "Soft, romantic looks perfectly designed for engagement photoshoots and ceremonies. Glowing skin, defined features, and a style that photographs beautifully.",
    includes: ["Makeup consultation", "Full face application", "Lashes", "Photography-ready finish"],
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80",
  },
  {
    id: "home",
    title: "Home Service",
    price: "Starting from LKR 30,000",
    description: "We bring our full salon experience to your home, hotel suite, or wedding venue. Our team arrives equipped with everything needed to create your perfect bridal look.",
    includes: ["Travel to your location", "Full bridal makeup", "Hair styling", "Emergency kit", "On-call support"],
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80",
  },
  {
    id: "bridesmaids",
    title: "Bridesmaids Package",
    price: "From LKR 10,000 per person",
    description: "Coordinated beauty packages for the entire bridal party. We ensure each bridesmaid looks stunning while complementing the bride's overall aesthetic.",
    includes: ["Group consultation", "Coordinated looks", "Timely service", "Touch-up kits"],
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: "#FAF8F5" }}>
      {/* Hero */}
      <div className="pt-32 pb-20 text-center" style={{ backgroundColor: "#2D2D2D" }}>
        <div className="container-luxury">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
              Our Expertise
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
          </div>
          <h1 className="font-normal" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#FAF8F5" }}>
            Our Services
          </h1>
          <p className="mt-4 text-lg font-light" style={{ fontFamily: "var(--font-cormorant)", color: "rgba(250,248,245,0.65)", fontStyle: "italic" }}>
            Every service is a curated experience, designed for the most important day of your life.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="section-padding">
        <div className="container-luxury">
          <div className="space-y-24">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 xl:gap-20 items-center ${i % 2 === 1 ? "lg:grid-flow-col-reverse" : ""}`}
              >
                {/* Image */}
                <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}>
                    {service.price}
                  </p>
                  <h2 className="text-3xl font-normal mb-5" style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}>
                    {service.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-manrope)", color: "#666", fontWeight: 300 }}>
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                      What's included
                    </p>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm" style={{ fontFamily: "var(--font-manrope)", color: "#666" }}>
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#C6A56B" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/book" className="btn-primary">
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-20 text-center" style={{ backgroundColor: "#F2E6D8" }}>
        <div className="container-luxury max-w-xl mx-auto">
          <h2 className="text-3xl font-normal mb-4" style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}>
            Not sure which service you need?
          </h2>
          <p className="text-base mb-8" style={{ fontFamily: "var(--font-manrope)", color: "#666" }}>
            Book a free consultation and Prasadini will personally recommend the perfect package for your wedding.
          </p>
          <Link href="/book" className="btn-primary">
            Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
