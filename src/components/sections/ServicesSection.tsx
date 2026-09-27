"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "bridal-makeup",
    title: "Luxury Bridal Makeup",
    subtitle: "Flawless. Lasting. Timeless.",
    description: "Bespoke bridal looks crafted for your unique features. Full day lasting formula with skin-prep consultation.",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80",
    href: "/services#bridal-makeup",
  },
  {
    id: "hair-styling",
    title: "Hair Styling & Updos",
    subtitle: "Editorial. Elegant. Eternal.",
    description: "From classic bridal buns to modern waves — hair artistry that complements your gown and personality.",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80",
    href: "/services#hair",
  },
  {
    id: "pre-wedding",
    title: "Pre Wedding Glow",
    subtitle: "Radiance from within.",
    description: "Multi-session skincare and makeup prep treatments to ensure your skin is at its most luminous on the big day.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    href: "/services#prewedding",
  },
  {
    id: "engagement",
    title: "Engagement Makeup",
    subtitle: "Beautiful beginnings.",
    description: "Soft, romantic looks for your engagement photoshoot or ceremony. Sophisticated and naturally beautiful.",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=600&q=80",
    href: "/services#engagement",
  },
  {
    id: "home-service",
    title: "Home Service",
    subtitle: "Luxury, at your door.",
    description: "We bring the full salon experience to your home, hotel, or wedding venue. Convenience without compromise.",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&q=80",
    href: "/services#home",
  },
  {
    id: "bridesmaids",
    title: "Bridesmaids Package",
    subtitle: "Your tribe, transformed.",
    description: "Coordinated beauty packages for the entire bridal party. Consistent elegance that photographs beautifully together.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
    href: "/services#bridesmaids",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding" style={{ backgroundColor: "#F2E6D8" }}>
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}
            >
              Our Expertise
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "#C6A56B" }} />
          </div>

          <h2
            className="font-normal mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#2D2D2D",
            }}
          >
            Signature Services
          </h2>

          <p
            className="text-base max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-cormorant)", color: "#666", fontSize: "1.2rem", fontWeight: 300 }}
          >
            Every service is a curated experience, designed to make you feel as extraordinary as you look
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link href={service.href} className="group block card-luxury">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: "rgba(198,165,107,0.15)" }}
                  />
                </div>

                {/* Card content */}
                <div className="p-6" style={{ backgroundColor: "white" }}>
                  <p
                    className="text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}
                  >
                    {service.subtitle}
                  </p>
                  <h3
                    className="text-xl font-normal mb-3 group-hover:text-[#C6A56B] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-playfair)", color: "#2D2D2D" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ fontFamily: "var(--font-manrope)", color: "#888", fontWeight: 300 }}
                  >
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs tracking-[0.15em] uppercase"
                      style={{ color: "#C6A56B", fontFamily: "var(--font-inter)" }}
                    >
                      Learn More
                    </span>
                    <div
                      className="h-px w-0 group-hover:w-8 transition-all duration-400"
                      style={{ backgroundColor: "#C6A56B" }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
